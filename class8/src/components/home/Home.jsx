import React from "react";
import {Link} from "react-router-dom";
import "./Home.scss";

export const Home = () => {
    return (
        <div className="container">
            <div className="container-inscription">
                <h2>Welcome to the product site</h2>
                <p>Don't forget to check <Link to="/products"> our shit</Link> out</p>
            </div>
        </div>
    )
};