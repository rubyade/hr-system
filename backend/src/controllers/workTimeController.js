const WorkTime = require("../models/workTimeModel");
const User = require("../models/userModel");
//user check in
exports.checkIn = async (req, res) => {
  try {
    const { id } = await req.user;

    await WorkTime.create({ userId: id });

    await User.findByIdAndUpdate(id, { status: "present" }, { new: true });

    res.status(201).json({
      message: "Succefully checked in",
    });
  } catch (error) {
    res.status(500).json({
      error: error.errmsg,
    });
  }
};

//user checkout
exports.checkOut = async (req, res) => {
  try {
    const workId = await req.params.id;
    const { id } = await req.user;

    await WorkTime.findByIdAndUpdate(
      workId,
      {
        logoutTime: Date.now(),
      },
      {
        new: true,
      }
    );

    await User.findByIdAndUpdate(id, { status: "absent" });

    res.status(200).json({
      message: "Succefully checked out",
    });
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
};

//get worktime records for all users
exports.getWorkTimeRecords = async (req, res) => {
  try {
    const { role } = await req.user;

    if (role !== "admin") {
      return res
        .status(401)
        .json({ message: "You are not allowed to perform this action" });
    }

    const workTime = await WorkTime.find();

    //workTime to format dates and times locally and include username
    const formattedWorkRecord = [];

    for (const record of workTime) {
      const loginTime = new Date(record.loginTime).toLocaleString();
      const logoutTime = new Date(record.logoutTime).toLocaleString();

      // Get user information
      let username = "N/A";
      try {
        const user = await User.findById(record.userId);
        if (user) {
          username = user.userName;
        }
      } catch (error) {
        return null;
      }

      // Total milliseconds worked
      const totalWorkTime =
        new Date(record.logoutTime) - new Date(record.loginTime);
      // Total hours worked
      const totalworkHours = (totalWorkTime / (60 * 60 * 1000)).toFixed(3) * 1;

      // Return response for each record
      formattedWorkRecord.push({
        id: record._id,
        loginTime,
        logoutTime,
        username,
        totalworkHours,
      });
    }

    // Send response to the user
    res.status(200).json({
      message: "Success",
      workTime: formattedWorkRecord,
    });
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
};

//generate attendance reports
exports.generateAttendanceReports = async (req, res) => {
  // Start date of the reporting period
  const startDate = new Date("2024-05-01");

  //up to date
  const endDate = Date.now();

  try {
    //check role
    const { role } = await req.user;

    if (role !== "admin") {
      return res
        .status(401)
        .json({ message: "You are not allowed to perform this action" });
    }

    // Query work time records for the specified date range
    const workTime = await WorkTime.find({
      loginTime: { $gte: startDate, $lte: endDate },
    });

    // Aggregate data to generate attendance reports
    const attendanceData = {};

    for (const record of workTime) {
      const loginTime = new Date(record.loginTime);
      const logoutTime = new Date(record.logoutTime);

      try {
        const user = await User.findById(record.userId);
        if (user) {
          const userName = user.userName;

          // Calculate total work hours for each user
          if (!attendanceData[userName]) {
            attendanceData[userName] = {
              totalWorkHours: 0,
              lateArrivals: 0,
              earlyDepartures: 0,
              totalRecords: 0,
            };
          }

          const totalWorkTime = logoutTime - loginTime;

          //setting time to hours
          attendanceData[userName].totalWorkHours +=
            (totalWorkTime / (1000 * 60 * 60)).toFixed(3) * 1;

          attendanceData[userName].totalRecords++;

          // Check for late arrivals and early departures
          if (loginTime.getHours() > 8) {
            // expected login time is 8:00 AM
            attendanceData[userName].lateArrivals++;
          }
          if (logoutTime.getHours() < 16) {
            // expected logout time is 4:00 PM
            attendanceData[userName].earlyDepartures++;
          }
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }

    // Generate and return attendance reports
    res.status(200).json({ attendanceData });
  } catch (error) {
    throw new Error("Error generating attendance reports: " + error.message);
  }
};
