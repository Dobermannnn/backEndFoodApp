const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/users");
const restRouter = require("./routes/restaurant");
const foodRouter = require("./routes/food");
const orderRouter = require("./routes/order");

const app = express();

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use("/user", userRouter);
app.use("/rest", restRouter);
app.use("/food", foodRouter);
app.use("/order", orderRouter);

module.exports = app;
