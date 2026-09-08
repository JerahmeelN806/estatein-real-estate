const express = require("express");
const authRoutes = require("./authRoutes");
const propertyRoutes = require("./propertyRoutes");
const contactRoutes = require("./contactRoutes");

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/properties", propertyRoutes);
router.use("/contact", contactRoutes);

module.exports = router;
