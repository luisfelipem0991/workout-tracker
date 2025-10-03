// Estado en memoria (simulación)
let workoutExercises = [
  {
    id: 301,
    plan_id: 2001,
    ejercicio_id: 101,
    series: 4,
    repeticiones: 12,
    peso: 40
  }
];

// GET /workoutExercises?plan_id=2001&ejercicio_id=101
const getAllWorkoutExercises = (req, res) => {
  const { plan_id, ejercicio_id } = req.query;
  let result = workoutExercises;

  if (plan_id) {
    result = result.filter(w => w.plan_id == plan_id);
  }

  if (ejercicio_id) {
    result = result.filter(w => w.ejercicio_id == ejercicio_id);
  }

  res.status(200).json(result);
};

//Get:id
const getWorkoutExerciseById = (req, res) => {
  const { id } = req.params;
  const workoutExercise = workoutExercises.find(w => w.id == id);

  if (!workoutExercise) {
    return res.status(404).json({ error: "WorkoutExercise no encontrado" });
  }

  res.status(200).json(workoutExercise);
};

//Post
const createWorkoutExercise = (req, res) => {
  const { plan_id, ejercicio_id, series, repeticiones, peso } = req.body;

  if (!plan_id || !ejercicio_id || !series || !repeticiones) {
    return res
      .status(400)
      .json({ error: "Campos requeridos: plan_id, ejercicio_id, series, repeticiones" });
  }

  const newWorkoutExercise = {
    id: Date.now(),
    plan_id,
    ejercicio_id,
    series,
    repeticiones,
    peso: peso || 0
  };

  workoutExercises.push(newWorkoutExercise);
  res.status(201).json(newWorkoutExercise);
};

//Put:ID
const updateWorkoutExercise = (req, res) => {
  const { id } = req.params;
  const { plan_id, ejercicio_id, series, repeticiones, peso } = req.body;

  const index = workoutExercises.findIndex(w => w.id == id);
  if (index === -1) {
    return res.status(404).json({ error: "WorkoutExercise no encontrado" });
  }

  if (!plan_id || !ejercicio_id || !series || !repeticiones) {
    return res
      .status(400)
      .json({ error: "Campos requeridos: plan_id, ejercicio_id, series, repeticiones" });
  }

  workoutExercises[index] = {
    ...workoutExercises[index],
    plan_id,
    ejercicio_id,
    series,
    repeticiones,
    peso
  };

  res.status(200).json(workoutExercises[index]);
};

//Delete:ID
const deleteWorkoutExercise = (req, res) => {
  const { id } = req.params;
  const index = workoutExercises.findIndex(w => w.id == id);

  if (index === -1) {
    return res.status(404).json({ error: "WorkoutExercise no encontrado" });
  }

  const deleted = workoutExercises.splice(index, 1);
  res.status(200).json({ deleted: deleted[0].id });
};

module.exports = {
  getAllWorkoutExercises,
  getWorkoutExerciseById,
  createWorkoutExercise,
  updateWorkoutExercise,
  deleteWorkoutExercise
};
