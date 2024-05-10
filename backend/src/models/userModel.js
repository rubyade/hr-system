const mongoose = require("mongoose");
const validator = require("validator");

const { models, Schema } = mongoose;

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: [true, "User name is required."],
      trim: true,
      lowercase: true,
      unique: [true, "User name already exists"],
      index: true,
      minLength: [6, "User name must be at least 6 characters"],
    },

    userEmail: {
      type: String,
      required: [true, "User email is required"],
      trim: true,
      lowercase: true,
      unique: [true, "User email already exists"],
      index: true,
      validate: [validator.isEmail, "Provide a valid email"],
    },

    userPassword: {
      type: String,
      required: [true, "User password is required."],
      trim: true,
    },

    role: {
      type: String,
      trim: true,
      enum: ["user", "admin"],
      default: "user",
    },

    status: {
      type: String,
      trim: true,
      enum: ["present", "absent"],
      default: "absent",
    },

    leaveBalance: {
      type: Number,
      default: 15,
    },

    usedLeaveDays: {
      type: Number,
      default: 0,
    },
  },

  {
    versionKey: false,
  }
);

const User = models.User || mongoose.model("User", userSchema);

module.exports = User;
