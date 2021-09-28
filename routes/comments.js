const express = require('express');
const axios = require('axios');
const router = express.Router();
const commentService = require('../services/comments');

router.post('/:movieId/add', async function(req, res, next){
    try {
        res.json(await commentService.create(req.params.movieId, req.body, req.connection.remoteAddress));
    } catch (err) {
        console.log(`Error while adding comment`,err.message);
        next(err);
    }
    
});

router.get('/:movieId/', async function(req, res, next){
    try {
        const data = await await commentService.retrieveComments(req.params.movieId)
        res.send(data);
    } catch (error) {
        console.log(`Error getting data`, error.message);
        next(error)
    }
});

module.exports = router;