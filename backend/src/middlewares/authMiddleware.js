// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, 'secret_key', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};
// Function to logout (invalidate token)
const logout = (req, res) => {
  // No need to do anything in the backend, since JWT tokens are stateless.
  // Clearing the token on the client-side is sufficient to "logout"
  res.json({ message: 'Logged out successfully' });
};

module.exports = { authenticateToken, logout };