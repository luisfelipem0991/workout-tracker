// src/routes/v1/workoutReports.routes.js
const express = require("express");
const router = express.Router();
const {
  getWorkoutReports,
  getWorkoutReportById,
  createWorkoutReport,
  updateWorkoutReport,
  deleteWorkoutReport
} = require("../../controllers/workoutReports.controller");

// Rutas de workoutReports
router.get("/", getWorkoutReports);
router.get("/:id", getWorkoutReportById);
router.post("/", createWorkoutReport);
router.put("/:id", updateWorkoutReport);
router.delete("/:id", deleteWorkoutReport);

module.exports = router;
