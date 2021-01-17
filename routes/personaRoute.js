'use strict'
 
// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var personaController = require('../controllers/personaController');


// Llamamos al router
var api = express.Router();
 
//  Guardar Persona
api.post('/personas', personaController.guardar);
api.get('/personas', personaController.todos);
api.get('/personabyID/:id', personaController.buscarPorID);

api.get('/personas/buscar2', personaController.buscar2);
api.get('/personas/buscar', personaController.buscar);
api.delete('/personas/:id', personaController.eliminarPersona);



// Exportamos la configuración
module.exports = api;
