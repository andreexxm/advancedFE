import React from "react";
import "./Header.scss";

import {Link} from 'react-router-dom';

const Header = () => {

    return (
        <nav className="header">
            <h1>Logo</h1>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>

                <Link to="/products">
                <li>Products</li>
                </Link>

                <Link to="/add">
                <li>Catalogue</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Header;