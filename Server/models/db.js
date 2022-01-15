const mysql = require('mysql2');
const dbConfig = require('../config/db.config');

// Create connection to database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

// Open MySQL connection
connection.connect(error => {
  if (error) console.error(error);
  console.log('Successfully connected to the database.');
});

module.exports = connection;