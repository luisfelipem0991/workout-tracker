// src/controllers/exercises.controller.js

// Estado en memoria (simulación)
let exercises = [
  {
    id: "101",
    nombre: "Press de banca",
    descripcion: "Ejercicio de fuerza para trabajar el pecho y tríceps.",
    categoria: "fuerza",
    grupo_muscular: "pecho"
  }
];

// GET /exercises
const getExercises = (req, res) => {
  const { categoria, grupo_muscular, search } = req.query;
  let result = exercises;

  if (categoria) {
    result = result.filter(e => e.categoria === categoria);
  }

  if (grupo_muscular) {
    result = result.filter(e => e.grupo_muscular === grupo_muscular);
  }

  if (search) {
    result = result.filter(e =>
      e.nombre.toLowerCase().includes(search.toLowerCase())
    );
  }

  res.status(200).json(result);
};

// GET /exercises/:id
const getExerciseById = (req, res) => {
  const { id } = req.params;
  const exercise = exercises.find(e => e.id === id);

  if (!exercise) {
    return res.status(404).json({ error: "Ejercicio no encontrado" });
  }

  res.status(200).json(exercise);
};

// POST /exercises
const createExercise = (req, res) => {
  const { nombre, descripcion, categoria, grupo_muscular } = req.body;

  if (!nombre || !descripcion || !categoria || !grupo_muscular) {
    return res
      .status(400)
      .json({ error: "Todos los campos son requeridos" });
  }

  const newExercise = {
    id: `${Date.now()}`,
    nombre,
    descripcion,
    categoria,
    grupo_muscular
  };

  exercises.push(newExercise);
  res.status(201).json(newExercise);
};

// PUT /exercises/:id
const updateExercise = (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, categoria, grupo_muscular } = req.body;

  const index = exercises.findIndex(e => e.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Ejercicio no encontrado" });
  }

  exercises[index] = {
    ...exercises[index],
    nombre,
    descripcion,
    categoria,
    grupo_muscular
  };

  res.status(200).json(exercises[index]);
};

// DELETE /exercises/:id
const deleteExercise = (req, res) => {
  const { id } = req.params;
  const index = exercises.findIndex(e => e.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Ejercicio no encontrado" });
  }

  const deletedExercise = exercises.splice(index, 1);
  res.status(200).json({ deleted: deletedExercise[0].id });
};



module.exports = {
  getExercises,
  getExerciseById,
  createExercise,
  updateExercise,
  deleteExercise
};