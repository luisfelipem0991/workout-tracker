// src/controllers/workoutSchedule.controller.js

// Estado en memoria (simulación)
let workoutSchedules = [
  {
    id: "4001",
    plan_id: 2001,
    usuario_id: 1,
    fecha_hora: "2025-09-21T18:00:00Z",
    estado: "pendiente"
  }
];

// GET /workoutSchedules?usuario_id=1&estado=pendiente
const getWorkoutSchedules = (req, res) => {
  const { usuario_id, estado } = req.query;
  let result = workoutSchedules;

  if (usuario_id) {
    result = result.filter(s => String(s.usuario_id) === String(usuario_id));
  }

  if (estado) {
    result = result.filter(s =>
      String(s.estado).toLowerCase() === String(estado).toLowerCase()
    );
  }

  res.status(200).json(result);
};

// GET /workoutSchedules/:id
const getWorkoutScheduleById = (req, res) => {
  const { id } = req.params;
  const schedule = workoutSchedules.find(s => s.id === id);

  if (!schedule) {
    return res.status(404).json({ error: "WorkoutSchedule no encontrado" });
  }

  res.status(200).json(schedule);
};

// POST /workoutSchedules
const createWorkoutSchedule = (req, res) => {
  const { plan_id, usuario_id, fecha_hora, estado } = req.body;

  if (!plan_id || !usuario_id || !fecha_hora) {
    return res.status(400).json({ error: "plan_id, usuario_id y fecha_hora son requeridos" });
  }

  const newSchedule = {
    id: `${Date.now()}`, // id único
    plan_id,
    usuario_id,
    fecha_hora,
    estado: estado || "pendiente"
  };

  workoutSchedules.push(newSchedule);

  res.status(201).json(newSchedule);
};

// PUT /workoutSchedules/:id
const updateWorkoutSchedule = (req, res) => {
  const { id } = req.params;
  const { plan_id, usuario_id, fecha_hora, estado } = req.body;

  const index = workoutSchedules.findIndex(s => s.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "WorkoutSchedule no encontrado" });
  }

  workoutSchedules[index] = {
    ...workoutSchedules[index],
    plan_id,
    usuario_id,
    fecha_hora,
    estado
  };

  res.status(200).json(workoutSchedules[index]);
};

// DELETE /workoutSchedules/:id
const deleteWorkoutSchedule = (req, res) => {
  const { id } = req.params;
  const index = workoutSchedules.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "WorkoutSchedule no encontrado" });
  }

  const deleted = workoutSchedules.splice(index, 1);
  res.status(200).json({ deleted: deleted[0].id });
};

module.exports = {
  getWorkoutSchedules,
  getWorkoutScheduleById,
  createWorkoutSchedule,
  updateWorkoutSchedule,
  deleteWorkoutSchedule
};