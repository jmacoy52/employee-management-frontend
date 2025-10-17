
import React, { useEffect, useState } from "react";
import axios from "axios";
import EmployeeForm from "../../Shared/EmployeeForm";
import EmployeeList from "../../Shared/EmployeeList";
<<<<<<< HEAD
import { PlusCircle, Users, XCircle } from "lucide-react";
import "./HRDashboard.css";
import "../../Shared/Employee.css";
=======
import EmployeeStats from "../../Shared/EmployeeStats";
import EditEmployeeModal from "../../Shared/EditEmployeeModal";
import { PlusCircle } from "lucide-react";
import "./HRDashboard.css";
import "../../Shared/EmployeeForm.css";
import toast from "react-hot-toast";
>>>>>>> frontend

const HRDashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState("");
<<<<<<< HEAD
  const [showForm, setShowForm] = useState(false);
  const [showList, setShowList] = useState(true); // show employees by default
=======
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);

  const token = localStorage.getItem("token");
>>>>>>> frontend

  const fetchEmployees = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/employees", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEmployees(res.data);
    } catch (err) {
      console.error("Error fetching employees:", err);
      toast.setError("Failed to load employees.");
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleEmployeeCreated = () => {
    fetchEmployees();
<<<<<<< HEAD
    setShowForm(false);
    setShowList(true);
=======
    setShowCreateForm(false);
  };

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    setEditOpen(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this employee?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/employees/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.success("Employee deleted successfully!");
      // Refresh employee list after deletion
      fetchEmployees();
    } catch (err) {
      console.error("Failed to delete employee:", err);
      toast.setError("Delete failed.");
    }
>>>>>>> frontend
  };

  return (
    <div className="hr-dashboard">
<<<<<<< HEAD
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
=======
      <div className="header">
        <h2>Welcome, HR</h2>
        <button
          className="btn-create"
          onClick={() => setShowCreateForm((p) => !p)}
        >
          <PlusCircle size={20} style={{ marginRight: "5px" }} />
          {showCreateForm ? "Cancel" : "Create Employee"}
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      {showCreateForm && (
        <EmployeeForm onSuccess={handleEmployeeCreated} />
      )}

      <EmployeeList
        employees={employees}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <EmployeeStats employees={employees} />

      <EditEmployeeModal
        open={editOpen}
        onClose={() => setEditOpen(false)}
        employee={editingEmployee}
        onUpdated={fetchEmployees}
      />
>>>>>>> frontend
    </div>
  );
};

export default HRDashboard;
