const bodyParser = require("body-parser");
const express = require("express");
const userRouter = require("./routes/users");
const restRouter = require("./routes/restaurant");
const foodRouter = require("./routes/food");
const orderRouter = require("./routes/order");

const app = express();
app.use(bodyParser.json());
app.use("/user", userRouter);
app.use("/rest", restRouter);
app.use("/food", foodRouter);
app.use("/order", orderRouter);

module.exports = app;
