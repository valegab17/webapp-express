//importiamo la connessione del DB
const connection = require('../data/db');


//funzione index
function index(req, res) {
    //preparo la query
    const sql = 'SELECT * FROM movies';

    //eseguo
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Data base query failed' });
        res.json(results);
    });
}
//funzione show
function show(req, res) {
    //prendo id da rotta di show
    const { id } = req.params;
    //preparo query per richiesta
    const moviesSql = 'SELECT * FROM movies WHERE id = ?';

    connection.query(moviesSql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        if (results.length === 0) return res.status(404).json({ error: 'Error, movie not found' })

            //salvo il risultato
            const movie = results[0];
            
            //ritorno il json di movies
            res.json(movie);
    });
}

module.exports = {
    index,
    show
};