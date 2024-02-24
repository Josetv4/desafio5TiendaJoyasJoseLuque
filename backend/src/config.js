const { config } = require('dotenv');
config();

exports.db = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME_DATABASE,
};

exports.PORT = process.env.PORT || 3000;
