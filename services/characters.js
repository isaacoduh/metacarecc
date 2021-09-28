const axios = require('axios');
const db = require('./db');
const helper = require('../helper');

var fn = function processCharacter(e){
    return new Promise(resolve => resolve(addCharacterToDb(e)));
}

async function addCharacterToDb(item){
    const result = await db.query(
        `INSERT INTO characters (name, height, mass,gender) VALUES (?,?,?,?)`,[item.name, item.height,item.mass,item.gender]
    );
    let message = 'Error in adding character to database';
    if(result.affectedRows){
        message = 'Data added!';
    }
}

async function getPageOfResults(page){
    const response = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
    return response.data.results;
}


async function retrieveData(){
    let characters = [];
    for(let page = 1; page <= 8; page++){
        const newResults = await getPageOfResults(page);
        characters = characters.concat(newResults);
    }
    return Promise.all(characters.map(fn));
}


async function retrieveCharacters(param, order, filterParams){
    
    if(param != null && order != null){
        const rows = await db.query(
            `SELECT * FROM characters ORDER BY ${param} ${order}`,[param, order]
        );
        const data = helper.emptyOrRows(rows);
        return {
            data
        }
    }else if (!filterParams === ''){
        const rows = await db.query(
            `SELECT *
             FROM characters
             WHERE ${filterParams.filter} = ?`,[filterParams.value]
        );
        const data = helper.emptyOrRows(rows);
        const totalCount = data.length;
        const totalHeight = data.map(item => item.height).reduce((prev, current) => prev + current, 0);
        return {
            totalCount,
            totalHeight,
            data
            
        }
    }
    else{
        const rows = await db.query(
            `SELECT * FROM characters`,
        );
        const data = helper.emptyOrRows(rows);
        const totalCount = data.length;
        const totalHeight = data.map(item => item.height).reduce((prev, current) => prev + current, 0);
        return {
            totalCount,
            data
        }
    }
    
    
    
}

module.exports = {
    retrieveCharacters,
    retrieveData
};