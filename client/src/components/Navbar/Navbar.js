import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
    return (
        <nav className="flex">
            <Link className="nav-link" to="/login">Log Out</Link>
            <Link className="nav-link" to="/register">Register</Link>
            <Link className="nav-link write flex" to="/write">Write</Link>
        </nav>
    )
};