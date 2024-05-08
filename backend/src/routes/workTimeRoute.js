const { verifyToken } = require("../controllers/tokenController");
const {
  checkIn,
  checkOut,
  getWorkTimeRecords,
  generateAttendanceReports,
} = require("../controllers/workTimeController");
const router = require("express").Router();

//all users
router.post("/user/checkin", verifyToken, checkIn);
router.patch("/user/checkout/:id", verifyToken, checkOut);

//admin controlled routes
router.get("/admin/worktime", verifyToken, getWorkTimeRecords);
router.get("/admin/worktime/report", verifyToken, generateAttendanceReports);

module.exports = router;
