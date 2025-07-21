import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HRDashboard.css";

const HRDashboard = () => {
  // State to hold employee list
  const [employees, setEmployees] = useState([]);

  // State for error messages
  const [error, setError] = useState("");

  // Toggle form visibility
  const [showForm, setShowForm] = useState(false);

  // Form data for creating a new employee
  const [newEmp, setNewEmp] = useState({
    FullName: "",
    email: "",
    position: "",
    Department: "",
    salary: "",
  });

  // Fetch all employees from backend
  const fetchEmployees = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/employees", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEmployees(res.data); // update employee list
    } catch (err) {
      console.error("Error fetching employees:", err);
      setError("Failed to load employees.");
    }
  };

  // Fetch employees once on page load
  useEffect(() => {
    fetchEmployees();
  }, []);

  // Update form state on input change
  const handleChange = (e) => {
    setNewEmp({
      ...newEmp,
      [e.target.name]: e.target.value,
    });
  };

  // Create new employee
  const handleCreate = async (e) => {
    e.preventDefault();
    setError("");

    // Ensure salary is converted to a number
    const employeeToSend = {
      ...newEmp,
      salary: Number(newEmp.salary),
    };

    console.log("Sending new employee:", employeeToSend);

    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/employees",
        employeeToSend,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // Clear form and hide it
      setNewEmp({
        FullName: "",
        email: "",
        position: "",
        Department: "",
        salary: "",
      });
      setShowForm(false);

      // Refresh employee list
      fetchEmployees();
    } catch (err) {
      console.error("Error creating employee:", err);
      const backendMsg = err.response?.data?.errors?.[0]?.msg;
      setError(backendMsg || "Failed to create employee.");
    }
  };

  return (
    <div className="hr-dashboard">
      <h2>Welcome, HR</h2>

      {/* Error display */}
      {error && <p className="error">{error}</p>}

      {/* Toggle create form */}
      <button className="btn-create" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Cancel" : "Create Employee"}
      </button>

      {/* ---------- Create New Employee Form ---------- */}
      {showForm && (
        <form className="create-form" onSubmit={handleCreate}>
          <input
            type="text"
            name="FullName"
            placeholder="Full Name"
            value={newEmp.FullName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={newEmp.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="position"
            placeholder="Position"
            value={newEmp.position}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="Department"
            placeholder="Department"
            value={newEmp.Department}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="salary"
            placeholder="salary"
            value={newEmp.salary}
            onChange={handleChange}
            required
          />
          <button type="submit">Create Employee</button>
        </form>
      )}

      {/* ---------- Employee List ---------- */}
      <table className="employee-table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>Department</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((emp) => (
              <tr key={emp._id}>
                <td>{emp.FullName}</td>
                <td>{emp.email}</td>
                <td>{emp.position}</td>
                <td>{emp.Department}</td>
                <td>${emp.salary}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No employees found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default HRDashboard;
