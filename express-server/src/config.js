require("dotenv").config();

const config = {
  port: process.env.PORT || 5000,
  dbUri: process.env.MONGO_URL,
  clientUrl: process.env.CLIENT_URL,
};

module.exports = config;
