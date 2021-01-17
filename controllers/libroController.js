'use strict'

// AQUI Cargamos el modelo para usarlo posteriormente en la siguiente clase
var Libro = require('../modelos/libro');
var Autor = require('../modelos/autor');

function guardar(req,res){


    let libro = new Libro()
     
    libro.nombre = req.body.nombre
    libro.idioma = req.body.idioma
    libro.codigo = req.body.codigo
    libro.anio = req.body.anio
    libro.autor = req.body.idAutor

    libro.save((err, librostore) => {

        res.status(200).send({ libroRegistrado: librostore })

    })

}
function listarSimple(req,res){
  Libro.find({}, (err, libro) => {
    if (!libro) return res.status(404).send({ message: 'Error libro no existe' })
    res.status(200).send({ libro })
})
}

function listar(req,res){
    Libro.find()
      .populate('autor').exec((err, libroconAutor) => {
        res.status(200).send({ libroconAutor })
      })
  }

function listarAutores(req,res){
  let nombreAutor = req.query.autor  
  let idAutor

  Autor.find({nombre:nombreAutor},(err,autor) => {
    if(err) return res.status(500).send({message:'Error al realizar la consulta'});
    if(!autor) return res.status(404).send({message:'El autor no existe'});
  
    idAutor = autor[0]._id
    Libro.find({autor:idAutor},(err,resultado) =>{
      res.status(200).send({resultado})
    }
      
      )
    /*.populate('autor','nombre nacionalidad')
    .exec((err, resultado) => {
       
      res.status(200).send({resultado}) 
    })*/
  })
    
}

function eliminarLibro(req, res) {

  let idLibro = req.params.id
  Libro.findById(idLibro,(err,libro)=>{
      if(err) return res.status(500).send({message:'error al realizar la peticion'})
      if(!libro) return res.status(404).send({message:'Error el libro no existe'})

      libro.remove( err => {
          if(err) return res.status(500).send({message:'error al realizar la peticion'})
          res.status(200).send({message:'El registro ha sido eliminado'})
       }

       )
   })
}


module.exports = {
    guardar,
    listarSimple,
    listar,
    listarAutores,
    eliminarLibro

};
