exports.corsOptions = (req, res, next) => {
  const originUrl =
    process.env.NODE_ENV === "production"
      ? process.env.CORS_ORIGIN
      : process.env.CORS_ORIGIN_DEV;

  if (req.headers.origin === originUrl) {
    res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );

    next();
  } else {
    res.status(405).json({ message: "Origin not allowed" });
  }
};

const DB = process.env.MONGO_URI;

const port = process.env.PORT || 3001;

module.exports = { DB, port };


