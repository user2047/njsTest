var db = require("./db.js")

module.exports.handleSignup = (email, password) =>{
  // check if email already exist
  // save the user to the database
  db.saveUser({
    email,
    password
  });
  // send the welcome mail
};
