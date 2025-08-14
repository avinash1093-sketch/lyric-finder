import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg'
import '../navbar/Navbar.css';

const Navbar = () => {
    return (

        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/">
                    <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
                </Link>
            </div>
            <div className="navbar-center">
                <ul className="nav-links">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/lyrics">Find Lyrics</a>
                    </li>
                    <li>
                        <a href="/addLyrics">Add Lyrics</a>
                    </li>
                    <li>
                        <a href="/about">About Us</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <a href="/cart" className="cart-icon" aria-label="Shopping Cart">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="cart-count">0</span>
                </a>
                <a href="/account" className="user-icon" aria-label="User Account">
                    <i className="fas fa-user"></i>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;