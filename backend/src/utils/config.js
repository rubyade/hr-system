require("dotenv").config();

const DB = process.env.MONGO_URI;

const port = process.env.PORT || 3001;

module.exports = { DB, port };