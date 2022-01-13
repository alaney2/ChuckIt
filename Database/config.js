let mysql = require('mysql2');
let pool = mysql.createPool({
    connectionLimit : 10,
    host            : '127.0.0.1',
    user            :'root',
    password        :'290629',
    database        :'chuckit_test'
});

module.exports = config;
