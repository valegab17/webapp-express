function imagePath(req, res, next){
//creo una nuova proprieta da aggiungere a req per path img
req.imagePath = `${req.protocol}://${req.get('host')}/img/movies`

//procedo con la risposta
next();
}

module.exports = imagePath;