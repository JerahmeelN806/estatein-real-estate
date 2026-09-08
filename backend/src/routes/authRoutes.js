const express = require("express");
const asyncHandler = require("../utils/asyncHandler");
const rateLimiter = require("../middleware/rateLimiter");
const {
  register,
  login,
  forgotPassword,
  resetPassword,
} = require("../controllers/authController");

const router = express.Router();

router.use(rateLimiter);
router.post("/register", asyncHandler(register));
router.post("/login", asyncHandler(login));
router.post("/forgot-password", asyncHandler(forgotPassword));
router.post("/reset-password", asyncHandler(resetPassword));

module.exports = router;
