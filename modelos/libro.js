'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const LibroSchema = Schema(
    {
      nombre:String,
      idioma:String,
      codigo:String,
      anio:{type:Number},
      autor: { type: Schema.ObjectId, ref: "autor" }

    })

module.exports = mongoose.model('libro',LibroSchema)    