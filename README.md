#  API de Entrenamiento - Documentación

Esta API maneja usuarios, ejercicios y planes de entrenamiento con reportes, horarios y progresos.  
Está construida con **Node.js + Express** y usa datos en memoria (simulación).  

---

##  Rutas Base

```
/api/v1
```

---

# 1️ Users

### Endpoints

| Método | Ruta               | Descripción |
|--------|--------------------|-------------|
| GET    | `/users`           | Listar usuarios (filtros por `role`, `search`) |
| GET    | `/users/:id`       | Obtener usuario por ID |
| POST   | `/users`           | Crear usuario |
| PUT    | `/users/:id`       | Actualizar usuario |
| DELETE | `/users/:id`       | Eliminar usuario |

### Ejemplos

**Request - POST /users**
```json
{
  "name": "Juan Pérez",
  "email": "juan@example.com",
  "role": "admin"
}
```

**Response 201**
```json
{
  "id": "1723456789123",
  "name": "Juan Pérez",
  "email": "juan@example.com",
  "role": "admin",
  "createdAt": "2025-09-12T12:00:00Z"
}
```

---

# 2️ Exercises

### Endpoints

| Método | Ruta               | Descripción |
|--------|--------------------|-------------|
| GET    | `/exercises`       | Listar ejercicios |
| GET    | `/exercises/:id`   | Obtener ejercicio por ID |
| POST   | `/exercises`       | Crear ejercicio |
| PUT    | `/exercises/:id`   | Actualizar ejercicio |
| DELETE | `/exercises/:id`   | Eliminar ejercicio |

### Ejemplo de Ejercicio
```json
{
  "id": "ex-123",
  "name": "Press banca",
  "muscleGroup": "Pecho",
  "equipment": "Barra",
  "difficulty": "Medio"
}
```

---

# 3️ WorkoutPlans

### Endpoints

| Método | Ruta                  | Descripción |
|--------|-----------------------|-------------|
| GET    | `/workoutPlans`       | Listar planes |
| GET    | `/workoutPlans/:id`   | Obtener plan por ID |
| POST   | `/workoutPlans`       | Crear plan |
| PUT    | `/workoutPlans/:id`   | Actualizar plan |
| DELETE | `/workoutPlans/:id`   | Eliminar plan |

### Ejemplo de Plan
```json
{
  "id": "plan-001",
  "title": "Hipertrofia 12 semanas",
  "description": "Plan enfocado en hipertrofia para intermedios",
  "durationWeeks": 12,
  "createdBy": "b42f53fa-7b30"
}
```

---

# 4️ WorkoutExercises

### Endpoints

| Método | Ruta                        | Descripción |
|--------|-----------------------------|-------------|
| GET    | `/workoutExercises`         | Listar workoutExercises |
| GET    | `/workoutExercises/:id`     | Obtener por ID |
| POST   | `/workoutExercises`         | Crear workoutExercise |
| PUT    | `/workoutExercises/:id`     | Actualizar workoutExercise |
| DELETE | `/workoutExercises/:id`     | Eliminar workoutExercise |

### Ejemplo
```json
{
  "id": "we-001",
  "planId": "plan-001",
  "exerciseId": "ex-123",
  "sets": 4,
  "reps": 10,
  "restTime": "90s"
}
```

---

# 5️ WorkoutSchedule

### Endpoints

| Método | Ruta                       | Descripción |
|--------|----------------------------|-------------|
| GET    | `/workoutSchedule`         | Listar agendas |
| GET    | `/workoutSchedule/:id`     | Obtener agenda por ID |
| POST   | `/workoutSchedule`         | Crear agenda |
| PUT    | `/workoutSchedule/:id`     | Actualizar agenda |
| DELETE | `/workoutSchedule/:id`     | Eliminar agenda |

### Ejemplo
```json
{
  "id": "ws-101",
  "planId": "plan-001",
  "userId": "b42f53fa-7b30",
  "date": "2025-10-01",
  "status": "pendiente"
}
```

---

# 6️WorkoutReports

### Endpoints

| Método | Ruta                     | Descripción |
|--------|--------------------------|-------------|
| GET    | `/workoutReports`        | Listar reportes |
| GET    | `/workoutReports/:id`    | Obtener reporte por ID |
| POST   | `/workoutReports`        | Crear reporte |
| PUT    | `/workoutReports/:id`    | Actualizar reporte |
| DELETE | `/workoutReports/:id`    | Eliminar reporte |

### Ejemplo
```json
{
  "id": "wr-900",
  "userId": "b42f53fa-7b30",
  "planId": "plan-001",
  "totalWorkouts": 12,
  "progressNotes": "Mejoró fuerza en banca y dominadas"
}
```

---

##  Códigos de Estado

- `200 OK` → Operación exitosa  
- `201 Created` → Recurso creado  
- `400 Bad Request` → Datos faltantes o inválidos  
- `404 Not Found` → Recurso no encontrado  
- `500 Internal Server Error` → Error inesperado en el servidor  

---

##  Ejecución

```bash
npm install
npm start
```
