import React from "react";
import { Link } from "react-router-dom";

export const HomeView = () => {
    return (
        <>
        <nav>
            <Link className="nav-link" to="/login">Log In</Link>
            <Link className="nav-link" to="/register">Register</Link>
            <Link className="nav-link" to="/write">Write Post</Link>
        </nav>
        <h1>Home Page</h1>
        </>
    );
};