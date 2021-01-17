'use strict'
 
// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var libroController = require('../controllers/libroController');
 
// Llamamos al router
var api = express.Router();
 
//  Guardar Autos
api.post('/libro', libroController.guardar);
api.get('/libro', libroController.listar);
api.delete('/libro/:id', libroController.eliminarLibro);
api.get('/librosimple', libroController.listarSimple)
api.get('/librosAutores', libroController.listarAutores)
// Exportamos la configuración
module.exports = api;

