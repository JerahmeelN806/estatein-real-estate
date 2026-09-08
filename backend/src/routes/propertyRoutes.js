const express = require("express");
const asyncHandler = require("../utils/asyncHandler");
const { protect, requireRole } = require("../middleware/authMiddleware");
const {
  getProperties,
  getPropertyById,
  createProperty,
} = require("../controllers/propertyController");

const router = express.Router();

router.get("/", asyncHandler(getProperties));
router.get("/:id", asyncHandler(getPropertyById));
router.post(
  "/",
  protect,
  requireRole("AGENT", "ADMIN"),
  asyncHandler(createProperty),
);

module.exports = router;
