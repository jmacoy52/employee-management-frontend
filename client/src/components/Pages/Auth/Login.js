import React, { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  // ------------- handle field change -------------
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // ------------- handle form submit -------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/login",
        formData
      );

      // save JWT
      const token = res.data.token;
      localStorage.setItem("token", token);

      // decode role from token
      const { role } = jwtDecode(token);

      // redirect based on role
      if (role === "Admin") {
        navigate("/AdminDahsboard");
      } else if (role === "user") {
        navigate("/HRDashboard");
      } else {
        navigate("/EmployeeDashboard");
      }
    } catch (err) {
      setError(
        err.response?.data?.error || "Login failed. Please try again."
      );
      console.error(err.response?.data);
    }
  };

  // ------------- UI -------------
  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit" className="btn-login">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
