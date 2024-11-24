import express from "express";

const app = express();

app.use("/auth", require("./auth/auth.routes"));

app.use("/userDetail", require("./userDetails/userDetails.routes"));


module.exports = app;
