const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const { authenticateToken, authorizeAdmin } = require('../middleware/authMiddleware');

router.get('/all', authenticateToken, authorizeAdmin, UserController.getAllUsers);
router.post('/register', UserController.register);
router.post('/login', UserController.login);

module.exports = router;
