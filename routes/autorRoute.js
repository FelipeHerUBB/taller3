'use strict'
 
// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var autorController = require('../controllers/autorController');


// Llamamos al router
var api = express.Router();
 

api.post('/autor', autorController.guardar);
api.get('/autor', autorController.todos);
api.delete('/autor/:id', autorController.eliminarAutor);




// Exportamos la confi,guración
module.exports = api;
