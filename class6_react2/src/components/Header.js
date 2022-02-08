import React from "react";
import "./Header.scss";

const Header = () => {

    const colorBlue = {
        color: "blue"
    };

    return (
        <nav className="header">
            {/* 
            CSS in JS --->
            <h1 style={colorBlue}>Logo // css in js</h1> 

            Inline overrides all else --->
            <h1 style = {{color: "blue"}}>Logo</h1> */}
            <h1>Logo</h1>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default Header;