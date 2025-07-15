import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HRDashboard.css";

const HRDashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEmployees = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("Unauthorized. Please login.");
        return;
      }

      try {
        const res = await axios.get("http://localhost:5000/api/employees", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setEmployees(res.data);
      } catch (err) {
        console.error("Failed to fetch employees:", err);
        setError("Could not load employees.");
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className="hr-dashboard">
      <h2>Welcome to HR Dashboard</h2>

      {error && <p className="error">{error}</p>}

      <div className="employee-list">
        <h3>Employee List</h3>
        {employees.length > 0 ? (
          <ul>
            {employees.map((emp) => (
              <li key={emp.id}>
                <strong>{emp.name}</strong> - {emp.email}
              </li>
            ))}
          </ul>
        ) : (
          <p>No employees found.</p>
        )}
      </div>
    </div>
  );
};

export default HRDashboard;

