var mysql = require("mysql");
require("dotenv").config();

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.MYSQL_PASS,
  database: ""
});

connection.connect(function(err) {
  if (err) throw err;
  console.log(`connected as id: ${connection.threadId}`);
});

module.exports = connection;
