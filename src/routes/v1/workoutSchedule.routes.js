const express = require("express");
const router = express.Router();

const {
  getWorkoutSchedules,
  getWorkoutScheduleById,
  createWorkoutSchedule,
  updateWorkoutSchedule,
  deleteWorkoutSchedule
} = require("../../controllers/workoutSchedule.controller");

// Endpoints
router.get("/", getWorkoutSchedules);
router.get("/:id", getWorkoutScheduleById);
router.post("/", createWorkoutSchedule);
router.put("/:id", updateWorkoutSchedule);
router.delete("/:id", deleteWorkoutSchedule);

module.exports = router;
