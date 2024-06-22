// routes/driversDataRoutes.js
const express = require('express');
const { authenticateToken } = require('../middlewares/authMiddleware');
const { getDriversData, createDriversData } = require('../controllers/driversData/driversDataController');

const driversDataController = require('../controllers/driversData/driversDataController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', authenticateToken, getDriversData);
router.post('/', authenticateToken, createDriversData);
// Implement other CRUD routes as needed

// PUT update existing driver's data
router.put('/:id', authMiddleware.authenticateToken, driversDataController.updateDriversData);

// DELETE delete existing driver's data
router.delete('/:id', authMiddleware.authenticateToken, driversDataController.deleteDriversData);

module.exports = router;
