require("dotenv").config();
const app = require("./App");
const cors = require("cors");
const mongoose = require("mongoose");
app.use(cors());

const run = async () => {
  try {
    const port = process.env.PORT;
    await mongoose.connect(process.env.MONGO_PATH);
    app.listen(port, () => console.log(`Listening on port: ${port}`));
  } catch (err) {
    console.log(`FAILED TO START: ${err}`);
  }
};

run();

process.on("SIGINT", async () => {
  await mongoose.connection.close();
  process.exit(0);
});
