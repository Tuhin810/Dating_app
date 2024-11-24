import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDb from "./config/db";
import Message from "./models/message.model";
import { updateMessageLimit } from "./services/updateMessageLimit";
import { createRoomIfNotExists } from "./services/createRoom";
import { IMessage } from "./@types/types/message.types";
import { ISocketMessage } from "./@types/types/socketMessage.types";
import { updateOnlineStatus } from "./services/updateOnlineStatus/updateUserOnlineStatus";
import { saveNewMessage } from "./services/saveMessage/SaveMessage";
import { updatePreviosUnseenMessage } from "./services/updatePreviosUnseenMessage/UpdatePreviosUnseenMessage";
import express from "express";
import { updateBlockedStatus } from "./services/updateBlockedStatus";
import roomModel from "./models/room.model";

dotenv.config();

const socketPort = process.env.SOCKET_PORT || 9999;

// Connect to MongoDB
connectDb();

const app = express();

app.get("/", (req, res) => {
  return res.status(200).send("server is healthy");
});

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
// Backend (Socket.io logic)
io.on("connection", (socket: any) => {
  console.log("A user connected");

  socket.on("online", async (data: any) => {
    const { userId } = data;
    console.log("online", userId);
    const userInstance = await updateOnlineStatus(userId, "ACTIVE");
    console.log("====>userInstance", userInstance);
    socket.emit("online", userInstance);
  });

  socket.on("offline", (data: any) => {
    const { userId } = data;
    console.log("disconnect", userId);
    updateOnlineStatus(userId, "INACTIVE");
  });

  socket.on("joinRoom", async (roomId: string, userId: string) => {
    socket.join(roomId);
    console.log(`User joined room: ${roomId}`);

    try {
      const roomDetails = await roomModel.find({ roomId: roomId });
      if (!roomDetails) {
        return socket.emit("error", { message: "Room not found" });
      }
      console.log("Emitting room details:", roomDetails); // Debug log
      io.to(roomId).emit("roomDetails", roomDetails); // Make sure this line executes

      // Fetch last 50 messages from the room
      const totalMessages = await Message.countDocuments({ roomId });
      const messages = await Message.find({ roomId })
        .skip(totalMessages > 50 ? totalMessages - 50 : 0)
        .limit(50);

      const connectedUsers = io.sockets.adapter.rooms.get(roomId);
      const userCount = connectedUsers ? connectedUsers.size : 0;

      // Emit the current user count to the frontend
      io.to(roomId).emit("userCountUpdate", { userCount });

      const lastMessage = messages[messages.length - 1];

      if (lastMessage && lastMessage.sender !== userId) {
        await updatePreviosUnseenMessage(roomId, lastMessage.sender, userCount);
      }

      const updatedMessages = messages.map(async (msg) => {
        if (msg.sender !== userId && !msg.seenBySender) {
          msg.seenBySender = true;
          await msg.save();
        }
        return msg;
      });
      await Promise.all(updatedMessages);

      // Send the updated messages to the current user
      socket.emit("previousMessages", messages);

      // Update messages sent by the current user to be seen if there is more than one user
      if (userCount > 1) {
        const updatedMessages = messages.map(async (msg) => {
          if (msg.sender === socket.id) {
            msg.seenBySender = true; // Mark as seen
            await msg.save(); // Save the updated message
          }
          return msg;
        });
        await Promise.all(updatedMessages);
        socket.emit("previousMessages", messages);
      } else {
        socket.emit("previousMessages", messages);
      }
    } catch (error) {
      console.error("Error fetching previous messages:", error);
    }
  });

  // socket.on("block", async (data: any) => {
  //   const { roomId, userId, status, gender } = data;

  //   try {
  //     await updateBlockedStatus(roomId, userId, status, gender);

  //     io.to(roomId).emit("block", { is_blocked: status, gender });
  //   } catch (error) {
  //     console.error("Error blocking user:", error);
  //   }
  // });

  socket.on("block", async (data: any) => {
    const { roomId, userId, status, gender, blockedto } = data;

    try {
      await updateBlockedStatus(roomId, userId, status, gender, blockedto);

      // Emit the event to all users in the room
      io.to(roomId).emit("block", { userId, is_blocked: status, gender });
    } catch (error) {
      console.error("Error blocking user:", error);
    }
  });

  socket.on("typing", (data: any) => {
    const { roomId, userId } = data;
    socket.to(roomId).emit("userTyping", { userId });
    console.log("typing");
  });

  socket.on("sendMessage", async (message: ISocketMessage) => {
    // console.log("Message received:", message);
    const { roomId, text, sender, female_user, male_user } = message;

    try {
      // Save the new message as seen by sender
      createRoomIfNotExists(roomId, female_user, male_user, sender);
      const connectedUsers = io.sockets.adapter.rooms.get(roomId);
      const userCount = connectedUsers ? connectedUsers.size : 0;

      await saveNewMessage(roomId, text, sender, userCount > 1);
      // Emit the new message to the room
      io.to(roomId).emit("receiveMessage", {
        text,
        sender,
        seenBySender: userCount > 1,
      });

      await updatePreviosUnseenMessage(roomId, sender, userCount);
    } catch (error) {
      console.error("Error saving message:", error);
    }
  });

  socket.on("block", async (data: any) => {
    const { roomId, userId, status } = data;
    // await blockUser(roomId, userId, status);
    io.to(roomId).emit("block", { is_blocked: status });
  });

  socket.on("disconnectUser", (userId: any, roomId: any) => {
    const rooms = Array.from(socket.rooms);
    const connectedUsers = io.sockets.adapter.rooms.get(roomId);
    const userCount = connectedUsers ? connectedUsers.size : 0;

    // Emit the current user count to the frontend
    io.to(roomId).emit("userCountUpdate", { userCount });
    rooms.forEach((room) => {
      if (room !== socket.id) {
        socket.leave(room);
        console.log(`User ${userId} left room: ${room}`);
      }
    });
  });
});

server.listen(socketPort, () => {
  console.log(
    `🚀 Socket.io Server is running at http://localhost:${socketPort}`
  );
});
