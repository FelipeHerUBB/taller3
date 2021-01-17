'use strict'
 
// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var prestamo = require('../controllers/prestamoController');
 
// Llamamos al router
var api = express.Router();
 
//  Guardar Autos
api.post('/prestamo', prestamo.guardarPrestamo);
api.get('/prestamo', prestamo.listar);
api.get('/prestamo/todos', prestamo.listarTodos);
api.get('/prestamo/autoresPorRut', prestamo.autoresPorRut);
api.delete('/prestamo/:id', prestamo.eliminarPrestamo);

// Exportamos la configuración
module.exports = api;
