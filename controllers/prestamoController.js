const { populate } = require('../modelos/prestamo.js');
var Prestamo = require('../modelos/prestamo.js');
var Persona = require('../modelos/persona.js');
var Autor = require('../modelos/autor.js');

function guardarPrestamo(req,res){

    let prestamo = new Prestamo()
    prestamo.libro=req.body.idLibro
    prestamo.persona=req.body.idPersona
    prestamo.fecha=req.body.fecha
    prestamo.save((err, prestamoReg) => {

        res.status(200).send({ registroInsertado: prestamoReg })

    })

  }

function listar(req,res){
  let idPerson
  let q_rut = req.query.rut

  Persona.find({rut:q_rut},(err,persona)=>{
    if(err) return res.status(500).send({message:'Error al realizar la consulta'});
    if(!persona) return res.status(404).send({message:'La persona no existe'});

    idPerson = persona[0]._id
    Prestamo.find({persona:idPerson})
    .populate('libro','nombre codigo')
    .populate('persona','nombre rut')
    .exec((err, resultado) => {
       
      res.status(200).send({resultado}) 
    })
  })
 }

 

 async function autoresPorRut(req,res){

    var autores = [];
    let q_rut = req.query.rut;
    var idPersona;


    await Persona.find({rut:q_rut},(err, persona) =>{
      if(err) return res.status(500).send({message:'Error al realizar la consultar'});
      if(!persona) return res.status(404).send({message:'Esta persona no ha pedido libros'});
  
      idPersona = persona[0]._id
      })


    try{

      let libros = await Prestamo.find({persona:idPersona}).populate('libro');
     
      for(let doc of libros){
        let data = await Autor.findOne({"_id":doc.libro.autor});
        autores.push(data.nombre);
      }
    res.status(200).send({autores});
    }catch(error){
      res.send(error);
    }

 }


 function listarTodos(req,res){
  Prestamo.find()
   .populate('persona','rut nombre')
   .populate('libro')
    .exec((err, resultado) => {

     res.status(200).send({resultado  })
   })
}


function eliminarPrestamo(req, res) {

  let idprestamo = req.params.id
  Persona.findById(idprestamo,(err,prestamo)=>{
      if(err) return res.status(500).send({message:'error al realizar la peticion'})
      if(!prestamo) return res.status(404).send({message:'Error el prestamo no existe'})

      prestamo.remove( err => {
          if(err) return res.status(500).send({message:'error al realizar la peticion'})
          res.status(200).send({message:'El registro ha sido eliminado'})
       }

       )
   })
}




  module.exports = {
    guardarPrestamo,
    listar,
    listarTodos,
    autoresPorRut,
    eliminarPrestamo
};
