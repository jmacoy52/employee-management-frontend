const express = require('express');
const router = express.Router();
const EmployeeController = require('../controllers/employeeController');
const authenticateToken = require('../middleware/auth.Middleware');


//Protect this route
router.get('/', authenticateToken, EmployeeController.getEmployees);
// Route to get all employees
router.get('/employees', EmployeeController.getEmployees);

// Route to create an employee
router.post('/employees', EmployeeController.createEmployee);

// PUT (update)
router.put('/employees/:id', EmployeeController.updateEmployee);

//Route to delete employee
router.delete('/employees/:id', EmployeeController.deleteEmployee);

//Route to get employee by id
router.get('/employees/:id', EmployeeController.getEmployeeById);

module.exports = router;
