
import React, { useEffect, useState } from "react";
import axios from "axios";
import EmployeeForm from "../../Shared/EmployeeForm";
import EmployeeList from "../../Shared/EmployeeList";
import EmployeeStats from "../../Shared/EmployeeStats";
import EditEmployeeModal from "../../Shared/EditEmployeeModal";
import { PlusCircle } from "lucide-react";
import "./HRDashboard.css";
import "../../Shared/EmployeeForm.css";
import toast from "react-hot-toast";

const HRDashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);

  const token = localStorage.getItem("token");

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
  };

  return (
    <div className="hr-dashboard">
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
    </div>
  );
};

export default HRDashboard;
