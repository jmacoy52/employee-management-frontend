require('dotenv').config({ path: __dirname + '/../.env' });

const mysql = require('mysql2');
const dotenv= require('dotenv');
dotenv.config(); // Load environment variables



const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});


module.exports = db; // EXPORT the connection so it can be used elsewhere