const express = require('express');
const router = express.Router();
const EmployeeController = require('../controllers/employeeController');

// Route to get all employees
router.get('/employees', EmployeeController.getEmployees);

// Route to create an employee
router.post('/employees', EmployeeController.createEmployee);

// Add more routes like PUT (update), DELETE later
router.put('/employees/:id', EmployeeController.updateEmployee);

//Route to delete employee
router.delete('/employees/:id', EmployeeController.deleteEmployee);

//Route to get employee by id
router.getEmployeeById('/employees/:id', EmployeeController.getEmployeeById);

module.exports = router;
