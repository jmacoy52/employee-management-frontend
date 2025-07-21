const db = require('../config/db');

// Get all employees
class EmployeeModel {
  static getAllEmployees(callback) {
    const query = 'SELECT * FROM employees';
    db.query(query, (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  }

  // Insert a new employee
  static insertEmployee(employeeData, callback) {
    const query = 'INSERT INTO employees (FullName, position, Department, Email, salary) VALUES (?, ?, ?, ?, ?)';
    const values = [
      employeeData.FullName,
      employeeData.position,
      employeeData.Department,
      employeeData.email || null, 
      employeeData.salary
    ];
    db.query(query, values, callback);
  }

  //Update Employees 
  static updateEmployee = (id, employeeData, callback) => {
    const query = 'UPDATE employees SET FullName = ?, position = ?, department = ?, salary = ? WHERE id = ?';
    const values = [employeeData.FullName, employeeData.position, employeeData.Department, employeeData.salary, id];
  
    db.query(query, values, callback);
  };


   //Delete employee
   static deleteEmployee(id, callback){
    const query = 'DELETE FROM employees WHERE id=?';
    db.query(query, [id], callback);
   }

    //Get employee by Id
   static getEmployeeById(id, callback) {
    const query = 'SELECT * FROM employees WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) return callback(err);
      if (results.length === 0) return callback(null, null);
      callback(null, results[0]);
    });
  }

   // This function helps you find employee by email (for validation)
   static findEmployeeByEmail(email) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM employees WHERE email = ?';
      // Execute the SQL query to check if the email exists
      db.query(query, [email], (err, results) => {
        if (err) {
          
          return reject(err);  // If there's a DB error, reject the Promise
        }
        if (results.length > 0) {  
          return resolve(results[0]); // If an employee with that email is found, resolve with the employee object
        }
        return resolve(null);  // If no employee is found, resolve with null
      });
    });
  }
}

module.exports = EmployeeModel;
