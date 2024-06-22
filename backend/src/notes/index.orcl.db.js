const express = require('express');
const oracledb = require('oracledb');
const dbConfig = require('../db/dbconfig'); // Import the configuration

const app = express(); // Create the Express app instance
const port = process.env.PORT || 3000; // Use environment variable for port (default: 3000)

async function connectToOracleDB() {
  try {
    await oracledb.getConnection(dbConfig);
    console.log('Successfully connected to Oracle Database!');
  } catch (err) {
    console.error('Error connecting to Oracle Database:', err);
  }
}

// (Optional) Route to test the connection (replace with your desired route)
app.get('/', async (req, res) => {
  try {
    await connectToOracleDB();
    res.send('Successfully connected to Oracle Database!');
  } catch (err) {
    res.status(500).send('Error connecting to Oracle Database!');
  }
});

// Start the server
app.listen(port, async () => {
  console.log(`Server listening on port ${port}`);
  await connectToOracleDB(); // Connect to DB on server start (optional)
});
