'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PersonaSchema = Schema(
    {
      nombre:String,
      rut:String,
      telefonos:[{descripcion:String,numero:{type:Number}}]
      
    })

module.exports = mongoose.model('persona',PersonaSchema)    