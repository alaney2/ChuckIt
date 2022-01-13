let mysql = require('mysql2');
let config = require('./config.js');
let pool = mysql.createPool(config);

pool.getConnection(function(err, connection){
    if(err) return console.error(error.message);
    console.log('Connection successful');

    let sql = `SELECT * FROM websites; `;
    connection.query(sql, function(error, result, fields){
        if (error) return console.error(error.message);
        console.log(result);
        connection.release();
    });
});
