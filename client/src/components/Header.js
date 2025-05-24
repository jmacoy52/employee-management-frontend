import React from "react";
import "./Header.css"

const Header =( ) =>{
    return(
        <Header>
            <div className= "header">
                <div className="logo">
                    <h2 className="flex p-6 text-white" style={{fontWeight: 700}}>eduVerse</h2>
                    <p className="p-4 text-white">Help</p>
                    <div className="navbar"><a href="./signin.html" className="signin">Sign In</a></div>
                </div>
            </div>
        </Header>
    );
};

export default Header;