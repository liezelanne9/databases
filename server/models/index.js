var db = require('../db');

module.exports = {
  messages: {
    get: function (cb) {
      // a function which produces all the messages
      db.query('SELECT * from messages', function (error, results) {
        if (error) {
          cb(error);
        } else {
          cb(null, results);
        }
      }); // make query to database
    }, 
    post: function (body, cb) {
      db.query(`INSERT INTO messages (username, message, roomname) VALUES (?,?, ?)`, [body.username, body.message, body.roomname],function (error, results) {
        if (error) {
          cb(error);
        } else {
          console.log('added message: ', body.message);
          cb(null, results);
        }
      })
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (cb) {
      db.query('SELECT * from users', function(error, results){
        if(error) {
          cb(error);
        } else {
          cb(null, results);
        }
      })
    },
    post: function (body, cb) {
      db.query('INSERT INTO users (username) VALUES (?)', [body.username], function(error, results) {
        if (error) {
          cb(error);
        } else {
          console.log('added user: ', body.username);
          cb(null, results);
        }
      })
    }
  }
};

/*
server/models/index.js defines the messages and 
users models that your application will use. 
Skeletons of the models have already been created 
but you'll have to write out the details for 
their methodsdat
*/

// server -> routers HTTP -> controllers -> models -> database