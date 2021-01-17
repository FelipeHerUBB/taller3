'use strict'

// AQUI Cargamos el modelo para usarlo posteriormente en la siguiente clase
var Autor = require('../modelos/autor.js');

function guardar(req, res) {

    // Devolvemos una respuesta en JSON

    let autor = new Autor()
    autor.nombre = req.body.nombre
    autor.nacionalidad = req.body.nacionalidad


    autor.save((err, autorstore) => {

        if (err) res.status(500).send(`Error base de datos> ${err}`)

        res.status(200).send({ autor: autorstore })

    })
}


function todos(req, res) {

    Autor.find({},(err,autor)=>{
        if(err) return res.status(500).send({message:'error al realizar la peticion'})
        if(!autor) return res.status(404).send({message:'Error el autor no existe'})

         res.status(200).send({autor})
     })
}

function eliminarAutor(req, res) {

    let idAutor= req.params.id
    Autor.findById(idAutor,(err,autor)=>{
        if(err) return res.status(500).send({message:'error al realizar la peticion'})
        if(!autor) return res.status(404).send({message:'Error el autor no existe'})

        autor.remove( err => {
            if(err) return res.status(500).send({message:'error al realizar la peticion'})
            res.status(200).send({message:'El registro ha sido eliminado'})
         }

         )
     })
}


module.exports = {
    guardar,
   todos,
   eliminarAutor
    
};
