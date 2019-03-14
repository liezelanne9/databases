DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  username TEXT NOT NULL,
  message TEXT NOT NULL,
  roomname TEXT NOT NULL
  -- user_id INTEGER AUTO_INCREMENT /* should be foreign key connected to users */
  -- FOREIGN KEY user_id REFERENCES users(id)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  /* Describe your table here.*/
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  username TEXT NOT NULL
  -- FOREIGN KEY username REFERENCES messages(username)
);



/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/

