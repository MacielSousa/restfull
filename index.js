const express = require('express');
const consign = require('consign');
const bodydParser = require('body-parser');

let app = express();

app.use(bodydParser.urlencoded({extended: false}));
app.use(bodydParser.json());

consign().include('routes').into(app);

//Configuração do Servidor
app.listen(3000, "127.0.0.1", () => {

    console.log('servidor rodando!');

});