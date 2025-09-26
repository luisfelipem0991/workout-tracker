const express = require("express");
const { port } = require("./config/env"); // Importa el puerto desde env.js

const app = express(); // Inicialización de Express

// Ruta principal
app.get("/", (req, res) => {
  res.send("Hola mi server en Express");
});

// Levantar el servidor
app.listen(port, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});
