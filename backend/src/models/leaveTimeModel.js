const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    startDate: {
      type: Date,
      trim: true,
    },
    endDate: {
      type: Date,
      trim: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  {
    versionKey: false,
  }
);

const Leave = mongoose.model("Leave", leaveSchema);

module.exports = Leave;
