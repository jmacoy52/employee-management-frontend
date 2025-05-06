const express = require('express');
const router = express.Router();
const EmployeeController = require('../controllers/employeeController');

// Route to get all employees
router.get('/', EmployeeController.getEmployees);

// Route to create an employee
router.post('/', EmployeeController.createEmployee);

// Add more routes like PUT (update), DELETE later

module.exports = router;
