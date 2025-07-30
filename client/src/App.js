import { Toaster } from "react-hot-toast";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Auth/Login";
import Register from "./components/Pages/Auth/Register";
import HRDashboard from "./components/Pages/Dashboards/HRDashboard/HRDashboard"; // Adjust path if needed
import AdminDashboard from "./components/Pages/Dashboards/AdminDashboard/AdminDashboard"; // Adjust path if needed
import PrivateRoute from "./components/Pages/Auth/PrivateRoute";

import UserList from "./components/Pages/Dashboards/AdminDashboard/UserList";

import './App.css';

function App() {
  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>

      
      {/* Sidebar or Header here */}
      
        {/* Other admin routes */}
        
      
    

      {/* Private Routes */}
      <Route element={<PrivateRoute allowedRoles={["admin", "hr", "employee"]} />}>
        <Route path="/hr" element={<HRDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Route>


        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/HRDashboard" element={<HRDashboard />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />}  />
        <Route path="/admin/users" element={<UserList />} />
      {/*<Route path="/admin-dashboard" element={<AdminDashboard />} />
<Route path="/employee-dashboard" element={<EmployeeDashboard />} />*/}

        {/* Add more routes here like register, dashboard, etc. */}
      </Routes>
      
    </Router>
  );
}

export default App;
// This App component serves as the main entry point for the application.
// It sets up the router and defines the main routes for the application, including the Home and Login pages.