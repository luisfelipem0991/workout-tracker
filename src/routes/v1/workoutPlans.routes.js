const express = require("express");
const router = express.Router();

const {
  getWorkoutPlans,
  getWorkoutPlanById,
  createWorkoutPlan,
  updateWorkoutPlan,
  deleteWorkoutPlan
} = require("../../controllers/workoutPlans.controller");

// Rutas CRUD
router.get("/", getWorkoutPlans);           // GET /api/v1/workoutPlans
router.get("/:id", getWorkoutPlanById);     // GET /api/v1/workoutPlans/:id
router.post("/", createWorkoutPlan);        // POST /api/v1/workoutPlans
router.put("/:id", updateWorkoutPlan);      // PUT /api/v1/workoutPlans/:id
router.delete("/:id", deleteWorkoutPlan);   // DELETE /api/v1/workoutPlans/:id

module.exports = router;
