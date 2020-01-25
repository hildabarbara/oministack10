const express = require('express');

const app = express();

app.listen(1234);

//  http://localhost:1234/
//  GET: Consultar dados, retornar informação
app.get('/', (request, response) => {
    
    //  Retorno Texto
    //return response.send("Hildinha");
    
    //  Retorno em objeto JSON
    return response.json({message : "Hildinha GET"});

});

//POST: criar informação
app.post('/post', (request, response) => {
    return response.json({message : "Hildinha POST"});
});

//  Lista de pessoas com Query Params
app.get('/pessoas', (req, res) => {
    console.log(req.query);
});

//  Route Param
app.delete('pessoas/:id', (req, res) => {
    console.log(req.params.id);
});