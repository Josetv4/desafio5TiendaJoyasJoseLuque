const pg = require('pg');
const { db } = require('./config.js');

const pool = new pg.Pool(db);

// Hay que crear el archivo .env para que todo funcione
// según el ejemplo que proporcionaste en .env.example
pool.on("CONECTADO :)", () => console.log("Estás Conectado :)"))

module.exports = { pool };
