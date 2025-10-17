<<<<<<< 
import React, { useState } from "react";
import "./Employee.css";

const EmployeeList = ({ employees }) => {
  const [selectedDept, setSelectedDept] = useState("All");

  const departments = [
    "All",
    ...Array.from(new Set(employees.map((emp) => emp.department))),
=======
import React from "react";
import { useState } from 'react'; 
import { Pencil, Trash2 } from "lucide-react";
import "./EmployeeForm.css";

const EmployeeList = ({ employees, onEdit, onDelete }) => {
    const [selectedDept, setSelectedDept] = useState("All");

  const departments = [
    "All",
    ...Array.from(new Set(employees.map((emp) => emp.Department))),
>>>>>>> frontend
  ];

  const filteredEmployees =
    selectedDept === "All"
      ? employees
<<<<<<< HEAD
      : employees.filter((emp) => emp.department === selectedDept);

  return (
    <div className="employee-table-container">
      <div className="filter-bar">
        <label htmlFor="department">Filter by Department:</label>
        <select
          id="department"
=======
      : employees.filter((emp) => emp.Department === selectedDept);
  return (
      <div className="employee-table-container">
      <div className="filter-bar">
        <label htmlFor="Department">Filter by Department:</label>
        <select
          id="Department"
>>>>>>> frontend
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

<<<<<<< HEAD
=======
    <div className="employee-table-wrapper">
>>>>>>> frontend
      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Position</th>
            <th>Department</th>
<<<<<<< HEAD
            <th>Email</th>
            <th>Salary</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((emp) => (
            <tr key={emp._id}>
=======
            <th>Salary</th>
            <th>Email</th>
            <th>Joined</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {filteredEmployees.map((emp) => (
            <tr key={emp.id}>
>>>>>>> frontend
              <td>{emp.id}</td>
              <td>{emp.FullName}</td>
              <td>{emp.position}</td>
              <td>{emp.Department}</td>
<<<<<<< HEAD
              <td>{emp.email}</td>
              <td>{emp.salary}</td>
              <td>{new Date(emp.created_at).toLocaleDateString()}</td>
=======
              <td>₵{emp.salary}</td>
              <td>{emp.email}</td>
               <td>{new Date(emp.created_at).toLocaleDateString()}</td>
              <td className="actions">
                <Pencil
                  className="icon edit"
                  title="Edit"
                  onClick={() => onEdit(emp)}
                />
                <Trash2
                  className="icon delete"
                  title="Delete"
                  onClick={() => onDelete(emp.id)}
                />
              </td>
>>>>>>> frontend
            </tr>
          ))}
        </tbody>
      </table>
    </div>
<<<<<<< HEAD
  );
};

=======
    </div>
  );
};




>>>>>>> frontend
export default EmployeeList;
