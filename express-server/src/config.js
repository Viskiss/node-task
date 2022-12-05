require("dotenv").config();

const defaultConfig = {
  port: process.env.PORT || 5000,
  dbUri: process.env.MONGO_URL,
  clientUrl: process.env.CLIENT_URL,
};

const localConfig = {
  port: process.env.PORT || 5000,
  dbUri: process.env.MONGO_URL,
  clientUrl: process.env.CLIENT_URL,
};

module.exports = localConfig, defaultConfig;
