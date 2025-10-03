const express = require('express');
const router = express.Router();

// importar versiones de rutas
const v1Routes = require('./v1');

// Configuracion de rutas versionadas
router.use('/v1', v1Routes);

//Ruta base para informacion de la API
router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the API',
    version: ['v1'],
    endopoints: {
      v1: '/api/v1'
    }
  });
});
 
module.exports = router; // Export the router
// get usuario http://localhost:8002/api/v1/users