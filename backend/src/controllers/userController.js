const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

//create a new user
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

//user login

exports.loginUser = async (req, res) => {
  try {
    const { userName, userPassword } = await req.body;

    //if missing information
    if (!userName || !userPassword) {
      return res.status(404).json({
        message: "Username and Password are required",
      });
    }

    //Find the user by username
    const user = await User.findOne({ userName });

    if (!user) {
      return res.status(404).json({
        message:
          "No matching user. Check details or consult admin for correct credentials",
      });
    }

    //Check password if user exists
    const rightPassword = await bcrypt.compare(userPassword, user.userPassword);

    if (!rightPassword)
      return res.status(404).json({
        message: "No matching password",
      });

    //generate token for the user if password is correct
    //token to be added
    res.status(200).json({
      user,
    });
  } catch (error) {
    res.status(500).json({
      error: error.errmsg,
    });
  }
};

//update user profile
exports.updateUser = async (req, res) => {
  const userId = req.params.userId;

  console.log(req.body);

  try {
    const user = await User.findByIdAndUpdate(userId, req.body);

    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({
      message: "User updated successfully",
      user,
    });

  } catch (error) {
    res.status(500).json({
      error: error.errmsg,
    });
  }
};

//delete user
exports.deleteUser = async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await User.findById(userId);

    if (!user) return res.status(404).json({ message: "User not found" });

    await User.findByIdAndDelete(userId);

    res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error.errmsg,
    });
  }
};
