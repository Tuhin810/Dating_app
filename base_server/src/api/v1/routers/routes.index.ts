import express from "express";

const app = express();


app.use("/userDetail", require("./userDetails/userDetails.routes"));


module.exports = app;
