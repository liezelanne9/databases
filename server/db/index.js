var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "student", no password,
// and to the database "chat".


const con = mysql.createConnection({
  host: `localhost`, 
  port: 3306,
  user: 'student',
  password: 'student'
});

con.connect((err) => {
  if(err){
    console.log('Error connecting to Db', err);
    return;
  }
  console.log('Connection established');
});










//port: 3306