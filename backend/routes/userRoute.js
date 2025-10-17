const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const { authenticateToken, authorizeAdmin } = require('../middleware/authMiddleware');
const userValidation = require('../validator/userValidator');
const { validationResult } = require('express-validator');

// Middleware to handle validation errors
const handleValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Route to register a user with validation
router.post('/register', userValidation, handleValidation, UserController.register);

// Route to get all users (Admin only)
router.get('/all', authenticateToken, authorizeAdmin, UserController.getAllUsers);
router.delete('/:id', authenticateToken, authorizeAdmin, UserController.deleteUser);

// Route to login a user
router.post('/login', UserController.login);

// Route to update user role (protected)
router.put('/:id/role', authenticateToken, UserController.updateUserRole);

// Route to delete a user (protected)

router.delete('/:id', authenticateToken, authorizeAdmin, UserController.deleteUser);

module.exports = router;
