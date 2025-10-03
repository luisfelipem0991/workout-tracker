let workoutPlans = [
  {
    id: "2001",
    usuario_id: 1,
    fecha_creacion: "2025-09-10T09:00:00Z",
    comentarios: "Plan de hipertrofia para 3 meses"
  }
];

// Get 
const getWorkoutPlans = (req, res) => {
  const { usuario_id, search } = req.query;
  let result = workoutPlans;

  if (usuario_id) {
    result = result.filter(p => p.usuario_id == usuario_id);
  }

  if (search) {
    result = result.filter(p =>
      p.comentarios.toLowerCase().includes(search.toLowerCase())
    );
  }

  res.status(200).json(result);
};

// Get:id
const getWorkoutPlanById = (req, res) => {
  const { id } = req.params;
  const plan = workoutPlans.find(p => p.id === id);

  if (!plan) return res.status(404).json({ error: "Plan no encontrado" });

  res.status(200).json(plan);
};

// Post
const createWorkoutPlan = (req, res) => {
  const { usuario_id, fecha_creacion, comentarios } = req.body;

  if (!usuario_id || !fecha_creacion || !comentarios) {
    return res.status(400).json({ error: "Todos los campos son requeridos" });
  }

  const newPlan = {
    id: `${Date.now()}`,
    usuario_id,
    fecha_creacion,
    comentarios
  };

  workoutPlans.push(newPlan);
  res.status(201).json(newPlan);
};

//Put
const updateWorkoutPlan = (req, res) => {
  const { id } = req.params;
  const { usuario_id, fecha_creacion, comentarios } = req.body;

  const index = workoutPlans.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ error: "Plan no encontrado" });

  workoutPlans[index] = {
    ...workoutPlans[index],
    usuario_id,
    fecha_creacion,
    comentarios
  };

  res.status(200).json(workoutPlans[index]);
};

// Delete
const deleteWorkoutPlan = (req, res) => {
  const { id } = req.params;
  const index = workoutPlans.findIndex(p => p.id === id);

  if (index === -1) return res.status(404).json({ error: "Plan no encontrado" });

  const deleted = workoutPlans.splice(index, 1);
  res.status(200).json({ deleted: deleted[0].id });
};

module.exports = {
  getWorkoutPlans,
  getWorkoutPlanById,
  createWorkoutPlan,
  updateWorkoutPlan,
  deleteWorkoutPlan
};