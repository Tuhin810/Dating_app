import express, { Express } from "express";
import cors from "cors";
import { json } from "body-parser";
import { createServer } from "http";
import { Server } from "socket.io";
import connectDb from "./config/db";

const app: Express = express();
const httpServer = createServer(app);

// Socket.IO setup
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const options: cors.CorsOptions = {
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};

app.use(cors(options));
app.use(json({ limit: "20000kb" }));

app.get("/hello", (req, res) => {
  return res.status(200).json({
    message: "Successfully Configured",
  });
});

connectDb();

io.on("connection", (socket:any) => {
  console.log(`User online: ${socket.id}`);

  socket.on("sendMessage", ({ sender, recipient, message }:any) => {
    console.log(`Message from ${sender} to ${recipient}: ${message}`);

    socket.to(recipient).emit("receiveMessage", {
      sender,
      message,
    });
  });

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

export default httpServer;
