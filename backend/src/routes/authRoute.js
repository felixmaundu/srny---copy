// routes/authRoutes.js
const express = require('express');
const { register, login } = require('../controllers/auth/authControllers');
const { authenticateToken } = require('../middlewares/authMiddleware');

const authController = require('../controllers/auth/authControllers');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/register', register);


router.post('/login', login);

// Logout route
router.post('/logout', authMiddleware.logout);

module.exports = router;
