'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const AutorSchema = Schema(
    {
      nombre:String,
      nacionalidad:String,


    })

module.exports = mongoose.model('autor',AutorSchema)    