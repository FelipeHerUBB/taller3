'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PrestamoSchema = Schema(
    {
    libro: { type: Schema.ObjectId, ref: "libro" },     
    persona: { type: Schema.ObjectId, ref: "persona" }, 
    fecha:String
    })

module.exports = mongoose.model('prestamo',PrestamoSchema)    