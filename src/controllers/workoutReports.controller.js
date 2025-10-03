// Estado en memoria (simulación)
let workoutReports = [
  {
    id: 6001,
    usuario_id: 1,
    fecha_inicio: "2025-08-01",
    fecha_fin: "2025-08-31",
    total_entrenamientos: 12,
    ejercicios_mas_frecuentes: ["Sentadillas", "Press de banca", "Dominadas"],
    mejora_por_grupo_muscular: {
      pecho: "+10 kg en press banca",
      piernas: "+15 kg en sentadillas",
      espalda: "Mayor número de repeticiones en dominadas"
    }
  }
];

// GET /workoutReports/:id
const getWorkoutReportById = (req, res) => {
  const { id } = req.params;
  const report = workoutReports.find(r => r.id == id);

  if (!report) {
    return res.status(404).json({ error: "Reporte no encontrado" });
  }

  res.status(200).json(report);
};

// GET /workoutReports?usuario_id=1&fecha_inicio=2025-08-01&fecha_fin=2025-08-31
const getWorkoutReports = (req, res) => {
  const { usuario_id, fecha_inicio, fecha_fin } = req.query;
  let result = workoutReports;

  if (usuario_id) {
    result = result.filter(r => r.usuario_id == usuario_id);
  }

  if (fecha_inicio) {
    result = result.filter(r => r.fecha_inicio >= fecha_inicio);
  }

  if (fecha_fin) {
    result = result.filter(r => r.fecha_fin <= fecha_fin);
  }

  res.status(200).json(result);
};

// POST /workoutReports
const createWorkoutReport = (req, res) => {
  const { usuario_id, fecha_inicio, fecha_fin, total_entrenamientos, ejercicios_mas_frecuentes, mejora_por_grupo_muscular } = req.body;

  if (!usuario_id || !fecha_inicio || !fecha_fin) {
    return res.status(400).json({ error: "usuario_id, fecha_inicio y fecha_fin son requeridos" });
  }

  const newReport = {
    id: Date.now(),
    usuario_id,
    fecha_inicio,
    fecha_fin,
    total_entrenamientos: total_entrenamientos || 0,
    ejercicios_mas_frecuentes: ejercicios_mas_frecuentes || [],
    mejora_por_grupo_muscular: mejora_por_grupo_muscular || {}
  };

  workoutReports.push(newReport);
  res.status(201).json(newReport);
};

// PUT /workoutReports/:id
const updateWorkoutReport = (req, res) => {
  const { id } = req.params;
  const { fecha_inicio, fecha_fin, total_entrenamientos, ejercicios_mas_frecuentes, mejora_por_grupo_muscular } = req.body;

  const index = workoutReports.findIndex(r => r.id == id);
  if (index === -1) {
    return res.status(404).json({ error: "Reporte no encontrado" });
  }

  workoutReports[index] = {
    ...workoutReports[index],
    fecha_inicio: fecha_inicio || workoutReports[index].fecha_inicio,
    fecha_fin: fecha_fin || workoutReports[index].fecha_fin,
    total_entrenamientos: total_entrenamientos ?? workoutReports[index].total_entrenamientos,
    ejercicios_mas_frecuentes: ejercicios_mas_frecuentes || workoutReports[index].ejercicios_mas_frecuentes,
    mejora_por_grupo_muscular: mejora_por_grupo_muscular || workoutReports[index].mejora_por_grupo_muscular
  };

  res.status(200).json(workoutReports[index]);
};

// DELETE /workoutReports/:id
const deleteWorkoutReport = (req, res) => {
  const { id } = req.params;
  const index = workoutReports.findIndex(r => r.id == id);

  if (index === -1) {
    return res.status(404).json({ error: "Reporte no encontrado" });
  }

  const deletedReport = workoutReports.splice(index, 1);
  res.status(200).json({ deleted: deletedReport[0].id });
};

module.exports = {
  getWorkoutReports,
  getWorkoutReportById,
  createWorkoutReport,
  updateWorkoutReport,
  deleteWorkoutReport
};