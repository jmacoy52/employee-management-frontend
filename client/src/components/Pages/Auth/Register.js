import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",  
    email: "",
    password: "",
    role: "",       
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    console.log("Register button clicked");
    
    try {
      const response = await axios.post("http://localhost:5000/api/users/register", formData);
      
      if (response.status === 201) {
        alert("Registration successful!");
        navigate("/login"); // redirect to login
      }
    } catch (err) {
      setError(err.response?.data?.error || "Registration failed. Try again."); // fix `.message` to `.error`
      console.log(err.response?.data); // for debugging
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="username" 
          placeholder="Username" 
          value={formData.username} 
          onChange={handleChange} 
          required 
        />
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
        <input 
          type="text" 
          name="role" 
          placeholder="HR or Admin ?" 
          value={formData.role} 
          onChange={handleChange} 
          required 
        />
        {error && <p className="error">{error}</p>}
        <button type="submit" className="btn-register">Register</button>
      </form>
    </div>
  );
};

export default Register;
