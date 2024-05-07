const jwt = require("jsonwebtoken");

exports.generateToken = (user) => {
  try {
    const token = jwt.sign(user, process.env.TOKEN_SECRET);

    return token;
  } catch (error) {
    return null;
  }
};

exports.verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(403).json({ message: "Action not allowed" });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    jwt.verify(token, process.env.TOKEN_SECRET, (error, user) => {
      if (error) {
        return res
          .status(403)
          .json({ message: "Invalid token" });
      }

      req.user = user;
      next();
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
