require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoute");
const config = require("./utils/config");
const workTimeRouter = require("./routes/workTimeRoute");
const leaveTimeRouter = require("./routes/leaveTimeRoute");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");
const router404 = require("./routes/404Route");

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

//documentation
app.use("/api/api-docs", swaggerUi.serve);
app.get("/api/api-docs", swaggerUi.setup(swaggerDocument));

//user routes
app.use("/api", userRouter);
app.use("/api", workTimeRouter);
app.use("/api", leaveTimeRouter);
app.use(router404);

const port = config.port;

app.listen(port, () => {
  console.log("listening on port " + port);
});
