//importiamo la connessione del DB
const connection = require('../data/db');


//funzione index
function index (req,res){
    //fai cose
    console.log("stai richiedendo index");
    
}
//funzione show
function show (req,res){
    //fai cose
    console.log("stai richiedendo show");
    
}

module.exports = { 
    index,
     show
    };