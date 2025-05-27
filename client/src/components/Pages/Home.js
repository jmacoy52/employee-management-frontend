import React from "react";
import Header from "../Header";  
import "./Home.css";
import Footer from "../Footer";

// This Home component serves as the landing page for the application.
const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="home-content">
        <h1>Welcome to EmploCore</h1> 
        <p>Streamline your workforce with precision control and effortless management</p>
        <div className="cta-buttons">
          <a href="/login" className="btn-login">Login</a>
          <a href="/register" className="btn-register">Register</a>
        </div>
      </div>
      <Footer />
    </div>
      
  );
};

export default Home;

// This Home component serves as the landing page for the application.
// It includes a header and a welcome message with call-to-action buttons for login and registration.