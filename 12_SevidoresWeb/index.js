const express = require('express');
const service = require('./src/service');

const Service = require('./src/service');

const app = express();
const PORT = 3000

app.use(express.json())

app.get('/',(req,res) =>{
    res.json({
        message:'lista de usuarios',
        body:Service.getUsers(),
    })
});

app.get('/:id',(req,res) =>{
  let { params : { id } }= req 
  let user = Service.getUser(id)
  res.json({
    message: `Usuario ${id}`,
    body: user,
  });
});

app.post('/',(req,res)=>{
  //  let newUser =  req.body; Destructuracion del body =>
  let { body: newUser} = req;
  let user = Service.createUser(newUser);
  res.status(201).json({
    message:'Usario creado',
    body: user,
  })
})

app.put('/:id',(req,res) => {
  const user =Service.getUser(req.params.id);
  let { params : { id }} = req;
  let { body: newUpdate} = req;
  if(user.length == 0){
    res.status(404).send(`Usuario con id ${req.params.id} no existe`);
  }
  else{
    let usuario =Service.updateUser(id,newUpdate);
    res.json({
      message: `Usuario id ${id}, actualizado`,
      body: usuario,
    });
    //res.send(service.updateUser(id,newUpdate))
  }
})

app.delete("/:id", (req, res) => {
  let identificador = req.params.id;
  let usuarioEliminado = Service.deleteUser(identificador);
 
  res.json({
    message: `Usuario ${identificador}, eliminado`,
    body: usuarioEliminado,
  });
});

app.listen(PORT,()=>{
    console.log(`servidor escuchando en http://localhost:${PORT}`);
});