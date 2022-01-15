let mysql = require('mysql2');
let config = require('./config.js');
let connection = mysql.createConnection(config);

connection.connect(function(err){
    if(err) return console.error('error: ' + err.message);
    console.log('Connected to the MySQL server.');
});


//insert SQL statements
let insertwebsite = `   INSERT INTO websites(url)
                        VALUES('www.google.com');       `;

connection.query(insertwebsite);

connection.end();