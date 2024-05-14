const User = require("../models/userModel");
const Leave = require("../models/leaveTimeModel");

//request leave
exports.leaveRequest = async (req, res) => {
  try {
    const { id } = await req.user;

    await Leave.create({ userId: id });

    res.status(201).json({
      message: "Leave request successful",
    });
  } catch (error) {
    res.status(500).json({
      error: "Server error",
    });
  }
};

//check user leave records
exports.getLeaveRequests = async (req, res) => {
  try {
    const { id } = await req.user;

    const leaveRequests = await Leave.find({ userId: id });

    if (leaveRequests.length === 0)
      return res.status(404).json({
        message: "No leave requests",
      });

    //formatting leave requests data
    const userLeaveRecords = [];

    for (const record of leaveRequests) {
      record.userId = undefined;

      const endDate = new Date(record.endDate).toLocaleDateString();
      const startDate = new Date(record.startDate).toLocaleDateString();
      const totalDays =
        (record.endDate - record.startDate) / (1000 * 60 * 60 * 24);

      if (endDate && startDate !== "Invalid Date") {
        userLeaveRecords.push({
          id: record._id,
          startDate,
          endDate,
          totalDays,
          status: record.status,
        });
      } else {
        userLeaveRecords.push({
          id: record._id,
          status: record.status,
        });
      }
    }

    res.status(200).json({
      message: "Success",
      userLeaveRecords,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

exports.deleteLeaveRequest = async (req, res) => {
  try {
    const { role } = req.user;

    //Admins are not allowed to delete a leave request
    if (role === "admin")
      return res
        .status(403)
        .json({ message: "Admin is not allowed to delete this request" });

    const id = await req.params.id;

    await Leave.findByIdAndDelete(id);

    res.status(200).json({
      message: "Successfully deleted the leave request",
    });
  } catch (error) {
    res.status(500).json({
      error: "Server error",
    });
  }
};

//leave records by admin
exports.getAllLeaveRecords = async (req, res) => {
  try {
    const { role } = await req.user;

    if (role !== "admin")
      return res
        .status(401)
        .json({ message: "Only admins can perform this action" });

    const leaveRecords = await Leave.find();

    if (leaveRecords.length === 0)
      return res.status(404).json({
        message: "No leave previous leave records",
      });

    //formatting leave records
    const formattedLeaveRecords = [];

    for (const record of leaveRecords) {
      let username = "N/A";

      try {
        const user = await User.findById(record.userId);
        if (user) {
          username = user.userName;
        }
      } catch (error) {
        return null;
      }

      const endDate = new Date(record.endDate).toLocaleDateString();
      const startDate = new Date(record.startDate).toLocaleDateString();
      const totalDays =
        (record.endDate - record.startDate) / (1000 * 60 * 60 * 24);

      if (endDate && startDate !== "Invalid Date") {
        formattedLeaveRecords.push({
          id: record._id,
          userName: username,
          startDate,
          endDate,
          totalDays,
          status: record.status,
        });
      } else {
        formattedLeaveRecords.push({
          id: record._id,
          userName: username,
          status: record.status,
        });
      }
    }

    res.status(200).json({
      message: "Success",
      formattedLeaveRecords,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

exports.updateLeaveRequest = async (req, res) => {
  try {
    const { role } = req.user;

    if (!role === "admin")
      return res
        .status(403)
        .json({ message: "Not allowed to perform this action" });

    const leaveId = await req.params.id;

    const { userId, leaveStatus, startDate, endDate } = await req.body;

    if (leaveStatus === "rejected") {
      //set the leave status to rejected
      await Leave.findByIdAndUpdate(leaveId, { status: leaveStatus });

      return res.status(200).json({
        message: `Successfully ${leaveStatus} the leave request`,
      });
    }

    //get the start and end dates for the leave request
    const leaveStartDate = new Date(startDate);
    const leaveEndDate = new Date(endDate);

    //getting the leaves days approved
    const leaveDays = Math.ceil(
      (leaveEndDate - leaveStartDate) / (1000 * 60 * 60 * 24)
    );

    //Update leave and user records
    await Leave.findByIdAndUpdate(
      leaveId,
      {
        status: leaveStatus,
        startDate: leaveStartDate,
        endDate: leaveEndDate,
      },
      { new: true }
    );

    const user = await User.findById(userId);

    //checking if user has remaining leave days
    if (user.leaveBalance < leaveDays)
      return res.status(403).json({
        message: `Insufficient leave days. Only ${user.leaveBalance} days remaining`,
      });

    user.leaveBalance -= leaveDays;
    user.usedLeaveDays += leaveDays;
    await user.save();

    //send response
    res.status(200).json({
      message: `Successfully ${leaveStatus} the leave request`,
      leaveDays,
    });
  } catch (error) {
    res.status(500).json({
      error: "Server error",
    });
  }
};
