// controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../../db/dbconfig'); // Import the database configuration

const register = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  // Encrypt the password
  if (!password) {
    return res.status(400).json({ error: 'Missing password in request body' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const query = `INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)`;
  pool.query(query, [first_name, last_name,email, hashedPassword], (err, result) => {
    if (err) {
      console.error('Error registering user:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    //  // Generate JWT token
    //  const token = jwt.sign({ userId: result.insertId }, 'secret_key', { expiresIn: '1h' });

    //  // Log the token to the console
    //  console.log('JWT token:', token);

    res.json({ message: 'User registered successfully' });
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  // Check if user exists
  const query = `SELECT * FROM users WHERE email = ?`;
  pool.query(query, [email], async (err, results) => {
    if (err) {
      console.error('Error finding user:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    if (results.length === 0) {
      res.status(401).json({ error: 'Invalid email or password' });
      return;
    }

    // Compare passwords
    const match = await bcrypt.compare(password, results[0].password);

    if (!match) {
      res.status(401).json({ error: 'Invalid email or password' });
      return;
    }

    // Generate JWT token
    const token = jwt.sign({ userId: results[0].id }, 'secret_key', { expiresIn: '1M' });
 
    res.json({ token });
  });
};

module.exports = { register, login };
