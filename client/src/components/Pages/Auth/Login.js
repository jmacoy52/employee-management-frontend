import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    console.log("Login button clicked");

    try {
      const response = await axios.post("http://localhost:5000/api/users/login", formData);

      if (response.status === 200) {
        alert("Login successful!");
        
        navigate("/dashboard"); //  Redirect after successful login
        
      }
    } catch (err) {
      setError(err.response?.data?.error || "Login failed. Please try again.");
      console.error(err.response?.data); // Log error for debugging
    }
  };

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
        <button type="submit" className="btn-login">Login</button>
      </form>
    </div>
  );
};

export default Login;