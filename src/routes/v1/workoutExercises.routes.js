const express = require("express");
const router = express.Router();
const workoutExercisesController = require("../../controllers/workoutExercises.controller");

// Definir endpoints y enlazarlos al controlador
router.get("/", workoutExercisesController.getAllWorkoutExercises);
router.get("/:id", workoutExercisesController.getWorkoutExerciseById);
router.post("/", workoutExercisesController.createWorkoutExercise);
router.put("/:id", workoutExercisesController.updateWorkoutExercise);
router.delete("/:id", workoutExercisesController.deleteWorkoutExercise);

module.exports = router;
