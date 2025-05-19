const express = require('express');
const router = express.Router();
const EmployeeController = require('../controllers/employeeController');
const { authenticateToken } = require('../middleware/authMiddleware');
const employeeValidation = require('../validator/employeeValidator');
const { validationResult } = require('express-validator');

// Middleware to handle validation errors
const handleValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Route to get all employees (protected)
router.get('/employees', authenticateToken, EmployeeController.getEmployees);

// Route to get a specific employee by ID (protected)
router.get('/employees/:id', authenticateToken, EmployeeController.getEmployeeById);

// Route to create an employee (protected)
router.post('/employees', authenticateToken, employeeValidation, handleValidation, EmployeeController.createEmployee);

// Route to update an employee (protected)
router.put('/employees/:id', authenticateToken, EmployeeController.updateEmployee);

// Route to delete an employee (protected)
router.delete('/employees/:id', authenticateToken, EmployeeController.deleteEmployee);

module.exports = router;
