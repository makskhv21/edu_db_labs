'use strict';

const mysql = require('mysql2');

const config = require('./constants.json')

const pool = mysql.createPool({
    host: config['DB_HOST'],
    user: config['DB_USER'],
    password: config['DB_PASS'],
    port: config['DB_PORT'],
    database: config['DB_DATABASE']
});

module.exports = pool.promise();
