import React, { useState } from "react";
import "./Employee.css";

const EmployeeList = ({ employees }) => {
  const [selectedDept, setSelectedDept] = useState("All");

  const departments = [
    "All",
    ...Array.from(new Set(employees.map((emp) => emp.department))),
  ];

  const filteredEmployees =
    selectedDept === "All"
      ? employees
      : employees.filter((emp) => emp.department === selectedDept);

  return (
    <div className="employee-table-container">
      <div className="filter-bar">
        <label htmlFor="department">Filter by Department:</label>
        <select
          id="department"
          value={selectedDept}
          onChange={(e) => setSelectedDept(e.target.value)}
        >
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>

      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Position</th>
            <th>Department</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((emp) => (
            <tr key={emp._id}>
              <td>{emp.id}</td>
              <td>{emp.FullName}</td>
              <td>{emp.position}</td>
              <td>{emp.Department}</td>
              <td>{emp.email}</td>
              <td>{emp.salary}</td>
              <td>{new Date(emp.created_at).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
