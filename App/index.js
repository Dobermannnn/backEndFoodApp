const bodyParser = require("body-parser");
const express = require("express");
const userRouter = require("./routes/users");

const app = express();
app.use(bodyParser.json());
app.use("/api/user", userRouter);

module.exports = app;
