var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      // a function which handles a get request for all messages
      models.messages.get((error, results) => {
        if (error) {
          console.log(error);
        } else {
          res.json(results);
        }
      })
      
    }, 
    post: function (req, res) {
      // a function which handles posting a message to the database
      models.messages.post(req.body, (error, results) => {
        if (error) {
          console.log(error)
        } else {
          res.send('added message!');
        }
      })
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((error,results) => {
        if (error) {
          console.log(error);
        } else {
          res.json(results);
        }
      })
    },
    post: function (req, res) {
      models.users.post(req.body, (error, results) => {
        if (error) {
          console.log(error);
        } else {
          res.send('added user!')
        }
      })
    }
  }
};

/*
server/controllers/index.js defines the messages and users 
controllers that your application will use. 
Skeletons of the controllers have already been created 
but you'll have to write out the details for their methods
*/

// server -> routers HTTP -> controllers -> models -> database