const { createUser } = require("../controllers/userController");
const router = require("express").Router();

router.post("/create/user", createUser);


module.exports = router;
