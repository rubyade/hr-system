const mongoose = require("mongoose");

const TimeRecordSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    loginTime: {
      type: Date,
      default: Date.now,
    },
    logoutTime: Date,
  },
  {
    versionKey: false,
  }
);

const WorkTime =
  mongoose.models.WorkTime || mongoose.model("WorkTime", TimeRecordSchema);

module.exports = WorkTime;
