import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h2>EmploCore</h2>
      </div>
      <nav className="navbar">
        <a href="/help">Help</a>
        <a href="/login" className="signin">Sign In</a>
      </nav>
    </header>
  );
};

export default Header;


// This Header component serves as the top navigation bar for the application.
