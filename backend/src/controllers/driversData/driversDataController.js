// controllers/driversDataController.js
const pool = require('../../db/dbconfig');

const getDriversData = (req, res) => {
  const userId = req.user.userId; // Get user ID from authenticated request
  const query = `SELECT * FROM drivers_data WHERE user_id = ?`;
  pool.query(query, [userId], (err, results) => {
    if (err) {
      console.error('Error retrieving drivers data:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(results);
  });
};

const createDriversData = (req, res) => {
  const userId = req.user.userId; // Get user ID from authenticated request
  const { gender, addressLine1, addressLine2, city, state, zipCode, country, drivingLicense, pictureUrl, licensePictureUrl, socialSecurity, socialSecurityCardNumber, resumeUrl, supportive_document } = req.body;
  
  const query = `INSERT INTO drivers_data (user_id, gender, address_line_1, address_line_2, city, state, zip_code, country, driving_license, picture_url, license_picture_url, social_security, social_security_card_number, resume_url, supportive_document) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  pool.query(query, [userId, gender, addressLine1, addressLine2, city, state, zipCode, country, drivingLicense, pictureUrl, licensePictureUrl, socialSecurity, socialSecurityCardNumber, resumeUrl, supportive_document], (err, result) => {
    if (err) {
      console.error('Error creating drivers data:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json({ message: 'Driver data created successfully' });
  });
};

// Implement update and delete functions as needed
const updateDriversData = (req, res) => {
  const userId = req.user.userId; // Get user ID from authenticated request
  const { id } = req.params; // Get the ID of the driver's data to update
  const { gender, addressLine1, addressLine2, city, state, zipCode, country, drivingLicense, pictureUrl, licensePictureUrl, socialSecurity, socialSecurityCardNumber, resumeUrl, supportive_document } = req.body;
  
  const query = `
    UPDATE drivers_data 
    SET gender = ?, address_line_1 = ?, address_line_2 = ?, city = ?, state = ?, zip_code = ?, country = ?, driving_license = ?, picture_url = ?, license_picture_url = ?, social_security = ?, social_security_card_number = ?, resume_url = ?, supportive_document = ?
    WHERE id = ? AND user_id = ?
  `;
  pool.query(query, [gender, addressLine1, addressLine2, city, state, zipCode, country, drivingLicense, pictureUrl, licensePictureUrl, socialSecurity, socialSecurityCardNumber, resumeUrl, supportive_document, id, userId], (err, result) => {
    if (err) {
      console.error('Error updating drivers data:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Driver data not found' });
      return;
    }
    res.json({ message: 'Driver data updated successfully' });
  });
};

const deleteDriversData = (req, res) => {
  const userId = req.user.userId; // Get user ID from authenticated request
  const { id } = req.params; // Get the ID of the driver's data to delete
  
  const query = `DELETE FROM drivers_data WHERE id = ? AND user_id = ?`;
  pool.query(query, [id, userId], (err, result) => {
    if (err) {
      console.error('Error deleting drivers data:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Driver data not found' });
      return;
    }
    res.json({ message: 'Driver data deleted successfully' });
  });
};

module.exports = { getDriversData, createDriversData, updateDriversData, deleteDriversData };

