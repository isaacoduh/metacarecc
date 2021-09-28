const axios = require('axios');
const db = require('./db');
const helper = require('../helper');

var fn = function processMovie(e){
    return new Promise(resolve => resolve(addMovieToDb(e)));
}

async function addMovieToDb(movie){
    const result = await db.query(
        `INSERT INTO movies (title, release_date, opening_crawl, url) VALUES(?,?,?,?)`,[movie.title, movie.release_date, movie.opening_crawl, movie.url]
    );
    let message = 'Error in adding movie to database';
    if(result.affectedRows){
        message = 'Data added !'
    }
    return true;
}

async function retrieveMovies(){
    try {
        await axios.get(
            'https://swapi.dev/api/films/'
        ).then(function(response){
            data = response.data.results;
            return Promise.all(data.map(fn));
        });
        return data;
    } catch (error) {
        console.error(error)
    }
}

async function getMovies() {
    // const rows = await db.query(
    //     `SELECT title, release_date, opening_crawl, count(movies.id) as commentsCount FROM movies JOIN comments WHERE movies.id = comments.movie_id`
    // );
    const rows = await db.query(
        `SELECT movies.title, movies.release_date, movies.opening_crawl, (SELECT COUNT(*) FROM comments WHERE movie_id = movies.id) AS comments_count FROM movies`
    );
    const data = helper.emptyOrRows(rows);
    return {
        data
    }
}

module.exports = {
    getMovies,
    retrieveMovies,
}