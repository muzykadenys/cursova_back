const express = require("express");
const router = express.Router();

const userRoutes = require("../domains/ticket");

router.use("/ticket", userRoutes);

module.exports = router;
