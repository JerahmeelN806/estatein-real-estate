const rateLimit = require("express-rate-limit");

const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    message: "Too many authentication attempts, please try again later.",
  },
});

module.exports = rateLimiter;
