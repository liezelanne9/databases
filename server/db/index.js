var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "student", no password,
// and to the database "chat".


const connection = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'chat'
});

connection.connect((err) => {
  if(err){
    console.log('Error connecting to Db', err);
    return;
  }
  console.log('Connection established');
});

module.exports = connection

//port: 3306