const router = require("express").Router();

//admin routes
router.use((req, res) => {
  res.status(404).json({ message: "Invalid route" });
});

module.exports = router;
