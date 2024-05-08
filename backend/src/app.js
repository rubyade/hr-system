require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoute");
const config = require("./utils/config");
const workTimeRouter = require("./routes/workTimeRoute");

const app = express();

//connect to database
mongoose.set("strictQuery", false);

mongoose
  .connect(config.DB)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.log("Error: ", err.message);
  });

app.use(express.json());

//user routes
app.use("/api", userRouter);
app.use("/api", workTimeRouter);

const port = config.port;

app.listen(port, () => {
  console.log("listening on port " + port);
});
