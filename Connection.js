let mysql = require('mysql2');

let connection = mysql.createConnection({
    host: '127.0.0.1:3306',
    user:'root',
    password:'290629',
    database:'chuckit_test'
});

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
});

connection.end(function(err) {
    if (err) {
      return console.log(err.message);
    }
});