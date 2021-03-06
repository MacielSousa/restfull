const express = require('express');
const consign = require('consign');
const bodydParser = require('body-parser');
const expressValidator = require('express-validator');

let app = express();


app.use(bodydParser.urlencoded({extended: false}));
app.use(bodydParser.json());
app.use(expressValidator());

consign().include('routes').include('utils').into(app);

//Configuração do Servidor
app.listen(3000, "127.0.0.1", () => {

    console.log('servidor rodando!');

});