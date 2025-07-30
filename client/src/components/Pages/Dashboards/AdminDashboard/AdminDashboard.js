import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";
import { Users, Settings, ScrollText } from "lucide-react";


const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        <h2 className="sidebar-title">Admin Panel</h2>
        <ul className="sidebar-menu">
          <li onClick={() => navigate("/admin/users")}> <Users size={20} /> View Users </li>
          <li onClick={() => navigate("/admin/usermanagement")}> <Settings size={20} /> User Management </li>
          <li onClick={() => navigate("/admin/auditlog")}> <ScrollText size={20} /> Audit Log </li>
        </ul>
      </aside>

      <main className="admin-main">
        <h1 className="admin-title">Admin Dashboard</h1>

        <div className="admin-cards-container">
          <div className="admin-card" onClick={() => navigate("/admin/users")}> 
            <Users size={30} className="card-icon" />
            <h2>View All Users</h2>
            <p>Browse and manage all registered users.</p>
          </div>

          <div className="admin-card" onClick={() => navigate("/admin/usermanagement")}> 
            <Settings size={30} className="card-icon" />
            <h2>User Management</h2>
            <p>Create, edit, and remove user accounts.</p>
          </div>

          <div className="admin-card" onClick={() => navigate("/admin/auditlog")}> 
            <ScrollText size={30} className="card-icon" />
            <h2>Audit Log</h2>
            <p>Review admin activity and changes made in the system.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
