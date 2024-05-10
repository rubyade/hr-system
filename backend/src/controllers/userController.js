const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const { generateToken } = require("./tokenController");

//create a new user
exports.createUser = async (req, res) => {
  try {
    const { role } = await req.user;

    if (role !== "admin")
      return res
        .status(401)
        .json({ message: "You are not allowed to perform this action" });

    //only admin can add new user
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

//getting all users
exports.getAllUsers = async (req, res) => {
  const { role } = await req.user;

  if (role !== "admin")
    return res
      .status(401)
      .json({ message: "You are not allowed to perform this action" });

  try {
    const users = await User.find();
    if (users.length === 0)
      return res.status(404).json({ message: "No users found" });

    //return all users if they exist

    //hide user passwords
    users.forEach((user) => {
      user.userPassword = undefined;
    });

    //send other user details
    res.status(200).json({
      message: "success",
      users,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
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

    const userDetails = {
      username: user.userName,
      role: user.role,
      id: user._id,
    };

    const token = generateToken(userDetails);

    if (!token)
      return res.status(500).json({ message: "Unable to generate token" });

    //if token send token
    res.status(200).json({
      message: "success",
      token,
    });

    //catch error if any
  } catch (error) {
    res.status(500).json({
      error: error.errmsg,
    });
  }
};

//update user profile
exports.updateUser = async (req, res) => {
  // const { role } = await req.user;

  // if (role !== "admin")
  //   return res
  //     .status(401)
  //     .json({ message: "You are not allowed to perform this action" });

  //get user id from the params
  const userId = req.params.userId;

  try {
    const user = await User.findByIdAndUpdate(userId, req.body);

    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({
      message: "User updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error.errmsg,
    });
  }
};

//delete user
exports.deleteUser = async (req, res) => {
  const { role } = await req.user;

  if (role !== "admin")
    return res
      .status(401)
      .json({ message: "You are not allowed to perform this action" });

  //Admin can delete the user
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
