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
      db.query(`INSERT INTO messages (id, message, room, user_id) VALUES (1, ?, ?, 5)`, [body.message, body.roomname],function (error, results) {
        if (error) {
          cb(error);
        } else {
          console.log('sucess: ', body.message);
          console.log(results);
          cb(null, results);
        }
      })
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
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