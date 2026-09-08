const express = require("express");
const asyncHandler = require("../utils/asyncHandler");
const { protect, requireRole } = require("../middleware/authMiddleware");
const {
  createContactMessage,
  getContactMessages,
} = require("../controllers/contactController");

const router = express.Router();

router.post("/", asyncHandler(createContactMessage));
router.get(
  "/",
  protect,
  requireRole("ADMIN"),
  asyncHandler(getContactMessages),
);

module.exports = router;
