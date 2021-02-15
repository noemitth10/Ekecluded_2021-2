/*const Pool = require("pg").Pool;
const pool = new Pool({
    user: "admin", 
    password: "admin",
    host: "localhost",
    port: 3306,
    database: "bookshop"
});*/


const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: 'admin',
  database: 'bookshop'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});
module.exports=connection;