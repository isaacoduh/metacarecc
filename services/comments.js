const axios = require('axios');
const db = require('./db');
const helper = require('../helper');


async function create(movieId, comment, ipaddress){
    const result = await db.query(
        `INSERT INTO comments (movie_id, content, ip_address) VALUES (?,?,?)`,[movieId, comment.content,ipaddress]
    )

    let message = 'Error in creating data';
    if(result.affectedRows){
        message = 'Data created successfully';
    }

    return {message};
}

async function retrieveComments(movieId){
    const rows = await db.query(
        `SELECT id, content, ip_address, created_at FROM comments ORDER BY created_at DESC`
    );

    const data = helper.emptyOrRows(rows);
    return {
        data
    }
}

module.exports = {
    create,
    retrieveComments
}