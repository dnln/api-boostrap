require("dotenv").config();

export default {
  jwt: {
    secret: process.env.JWT_SECRET,
    expiry: process.env.JWT_EXPIRY
  }
};
