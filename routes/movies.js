const express = require('express');
const axios = require('axios');
const router = express.Router();
const movieService = require('../services/movies');

router.get('/retrieve', async function (req, res,next) {
    try {
        const data = await movieService.retrieveMovies();
        res.status(200).json({"message": "Data Retrieved Successfully"});
        
    } catch (error) {
        console.log(`Error while getting data`, error.message);
        next(error);
    }
});

router.get('/', async function(req, res, next){
    try {
        res.json(await movieService.getMovies());
    } catch (error) {
        console.log(`Error while getting data`, error.message);
        next(error);
    }
})

module.exports = router;