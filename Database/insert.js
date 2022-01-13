
let config = require('./config.js');
let pool = mysql.createConnection(config);

pool.getConnection(function(err, connection){
    if(err) throw err;
    console.log('Connection successful');
}


//insert SQL statements
let insertwebsite = `   INSERT INTO websites(url)
                        VALUES('www.google.com');       `;

connection.query(insertwebsite);

connection.end();