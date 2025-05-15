const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Register
router.post('/register', UserController.register);

// Login
router.post('/login', UserController.login);

module.exports = router;
