import React, { useEffect, useState } from "react";
import axios from "axios";
import EmployeeForm from "../../Shared/EmployeeForm";
import EmployeeList from "../../Shared/EmployeeList";
import { PlusCircle, Users, XCircle } from "lucide-react";
import "./HRDashboard.css";
import "../../Shared/Employee.css";

const HRDashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showList, setShowList] = useState(true); // show employees by default

  const fetchEmployees = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/employees", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEmployees(res.data);
    } catch (err) {
      console.error("Error fetching employees:", err);
      setError("Failed to load employees.");
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleEmployeeCreated = () => {
    fetchEmployees();
    setShowForm(false);
    setShowList(true);
  };

  return (
    <div className="hr-dashboard">
      <header className="hr-dashboard-header">
        <h2>HR Dashboard</h2>
      </header>

      <div className="hr-dashboard-body">
        <aside className="hr-sidebar">
          <button
            className={`sidebar-btn ${showForm ? "active" : ""}`}
            onClick={() => {
              setShowForm(true);
              setShowList(false);
            }}
            title="Create Employee"
          >
            <PlusCircle size={24} />
            <span>Create</span>
          </button>

          <button
            className={`sidebar-btn ${showList ? "active" : ""}`}
            onClick={() => {
              setShowList(true);
              setShowForm(false);
            }}
            title="View All Employees"
          >
            <Users size={24} />
            <span>Employees</span>
          </button>

          {showForm && (
            <button
              className="sidebar-btn"
              onClick={() => {
                setShowForm(false);
                setShowList(true);
              }}
              title="Cancel"
            >
              <XCircle size={24} />
              <span>Cancel</span>
            </button>
          )}
        </aside>

        <main className="hr-main-content">
          {error && <p className="error">{error}</p>}

          {showForm && (
            <EmployeeForm onSuccess={handleEmployeeCreated} />
          )}

          {showList && (
            <EmployeeList employees={employees} />
          )}
        </main>
      </div>
    </div>
  );
};

export default HRDashboard;
