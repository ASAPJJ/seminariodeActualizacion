const express = require('express');
const miServidor = express();

miServidor.use(express.urlencoded({extended: true}));

miServidor.use(express.static('public'))

miServidor.post("/enviar-datos",(req,res) => {
    const losDatos = "el nombre es " + req.body.txtNombre + " y su correo es " + req.body.txtEmail
    
    console.log(losDatos);
})

miServidor.listen(3000, function () {
    console.log("Listening on port 3000")
});
