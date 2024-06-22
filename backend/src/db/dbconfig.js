// dbConfig.js
const mysql = require('mysql2');

// MySQL connection parameters
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'serenity'
};

// Create a connection pool
const pool = mysql.createPool(dbConfig);

module.exports = pool;
