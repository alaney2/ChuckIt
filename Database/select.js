let mysql = require('mysql2');
let config = require('./config');

let connection = mysql.createConnection(config);

let sql = `SELECT ? FROM ? `