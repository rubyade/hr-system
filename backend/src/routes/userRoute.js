const { verifyToken } = require("../controllers/tokenController");
const {
  createUser,
  getAllUsers,
  loginUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const router = require("express").Router();

//admin routes
router.post("/create/user", verifyToken, createUser);
router.delete("/delete/user/:userId", verifyToken, deleteUser);
router.get("/users", verifyToken, getAllUsers);

//all users
router.post("/auth/user/login", loginUser);
router.patch("/update/user/:userId", verifyToken, updateUser);

module.exports = router;
