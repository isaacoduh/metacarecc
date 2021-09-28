const express = require('express');
const axios = require('axios');
const router = express.Router();
const characterService = require('../services/characters');

router.get('/', async function(req, res, next){
    const filterParams = {};
    if(req.query.filter && req.query.value){
        filterParams.filter = req.query.filter;
        filterParams.value = req.query.value;
    }
    
    try {
        res.json(await characterService.retrieveCharacters(req.query.sortBy, req.query.order, filterParams));
    } catch (error) {
        console.log(`Error while getting data`, error.message);
        next(error);
    }
});

router.get('/retrieve-ext', async function(req, res, next){
    try {
        res.json(await characterService.retrieveData());
    } catch (error) {
        console.log(`Error while getting data`, error.message);
        next(error);
    }
})

module.exports = router;