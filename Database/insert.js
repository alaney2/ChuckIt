let mysql = require('mysql2');
let config = require('./config.js');
let pool = mysql.createPool(config);
// let insert_id = -1;
pool.getConnection(function(err, connection){
    if(err) return console.error(error.message);
    console.log('Connection successful');
    let insertwebsite = `   INSERT INTO websites(url)
                            VALUES(?);       `;
    connection.query(insertwebsite, ['iuhi.com'],function(error, result, fields){
        if (error) return console.error(error.message);
        console.log('Insert id: ' + result.insertId);
        connection.release();
    });
    
});

