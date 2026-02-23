const express = require('express');
const app = express();
const port = process.env.PORT;
const connection= require('./data/db');

//import router movies
const movieRouters = require('./routers/movieRouters')
//import del middleware di gestione errore interno 500 
const errorsHandler = require("./middlewares/errorsHandler");
//import dell'errore 404 not found
const notFound = require("./middlewares/notFound");

//attivazione della cartella public per uso file statici 
app.use(express.static('public'))

//rotta di home app
app.get('/api', (req,res)=>{
    res.send("<h1>Home dell'app movies </h1>")
})

//rotte relative al router dei film
app.use('/api/movies', movieRouters)

//registriamo il middleware di gestionbe error 500
app.use(errorsHandler);
//registriamo il middleware di 404
app.use(notFound);

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`)
})