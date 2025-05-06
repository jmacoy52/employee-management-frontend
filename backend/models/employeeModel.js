const db = require('../config/db');

class EmployeeModel {
  // Get all employees
  static getAllEmployees(callback) {
    const query = 'SELECT * FROM employees';
    db.query(query, (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  }

  // Insert a new employee
  static insertEmployee(employeeData, callback) {
    const query = 'INSERT INTO employees (FullName,Position, Department, Email, Salary) VALUES (?, ?, ?, ?, ?)';
    const values = [
      employeeData.name,
      employeeData.position,
      employeeData.department,
      employeeData.email || null, 
      employeeData.salary
    ];
    db.query(query, values, callback);
  }

  // (Optional) More methods can be added here like updateEmployee, deleteEmployee etc.
}

module.exports = EmployeeModel;
