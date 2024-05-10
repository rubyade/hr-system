const {
  leaveRequest,
  getLeaveRequests,
  getAllLeaveRecords,
  deleteLeaveRequest,
  updateLeaveRequest,
} = require("../controllers/leaveTimeController");
const { verifyToken } = require("../controllers/tokenController");

const router = require("express").Router();

//user routes
router.post("/leave/request", verifyToken, leaveRequest);
router.get("/leave/records", verifyToken, getLeaveRequests);
router.delete("/leave/request/:id", verifyToken, deleteLeaveRequest);

//admin routes
router.get("/leave/admin/records", verifyToken, getAllLeaveRecords);
router.patch("/leave/admin/update/:id", verifyToken, updateLeaveRequest);

module.exports = router;
