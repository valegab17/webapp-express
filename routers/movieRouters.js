//importo parte di express
const express = require('express');
//importo parte di express per gestire le rotte
const router = express.Router();

//importo controller
const movieController = require('../controllers/movieController');

//definisco le rotte
//rotta index
router.get('/', movieController.index);
//rotta show
router.get('/:id', movieController.show);

module.exports = router;
