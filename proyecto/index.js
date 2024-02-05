const express =require('express');
const debug = require('debug')('app:main');

const { Config } = require('./src/config');
const { ProductsAPI } = require('./src/products');

const app = express();

app.use(express.json());

ProductsAPI(app);

//Modulos

app.listen(Config.port, () =>{
    debug(`Servidor escuchando en el puerto ${Config.port}`)
});

