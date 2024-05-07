const {
  createUser,
  loginUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const router = require("express").Router();

router.post("/create/user", createUser);
router.post("/auth/user/login", loginUser);
router.patch("/update/user/:userId", updateUser);
router.delete("/delete/user/:userId", deleteUser);

module.exports = router;
