const Employee = require('../models/employeeModel');

class EmployeeController {
  // Get all employees
  static getEmployees(req, res) {
    Employee.getAllEmployees((err, data) => {
      if (err) {
        console.error('Error fetching employees:', err);
        return res.status(500).json({ error: 'Failed to fetch employees' });
      }
      res.status(200).json(data);
    });
  }

  // Create a new employee
  static createEmployee(req, res) {
    const { name, position, department, salary, email } = req.body;

    if (!name || !position || !department || !salary) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newEmployee = { name, position, department, salary, email };
    Employee.insertEmployee(newEmployee, (err, result) => {
      if (err) {
        console.error('Error inserting employee:', err);
        return res.status(500).json({ error: 'Failed to insert employee' });
      }

      res.status(201).json({ message: 'Employee created successfully', id: result.insertId });
    });
  }

  // More methods like updateEmployee and deleteEmployee can follow...
}

module.exports = EmployeeController;
