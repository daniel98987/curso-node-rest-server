const express = require('express');
const cors = require('cors');
class  Server{

    constructor(){
        this.app = express();
        this.port =process.env.PORT;
        this.usuariosPath='/api/usuarios';

        // Middlewares 
        this.middlewares();
        this.routes();

    }
    middlewares(){
        //CORS
        this.app.use(cors());

        //Parseo y lectura del body
        //de esta manera cualquier informacion que llegue la va intentar
        //serializar a un formato json;
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'));
    }
    routes(){
       
          this.app.use( this.usuariosPath,require('../routes/usuarios'));

        
    }
    listen(){
        this.app.listen( this.port,()=>{
            console.log('Servidor corriendo en puerto,',this.port);
        })
    }

}

module.exports=Server;