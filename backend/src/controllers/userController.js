const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
exports.createUser = async (req, res) => {
  try {
    const user = await req.body;

    if (!user)
      return res.status(404).json({
        message: "No content provided to create user",
      });

    const hashedPassword = await bcrypt.hash(user.userPassword, 12);

    user.userPassword = hashedPassword;

    await User.create(user);

    res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error.errmsg,
    });
  }
};
