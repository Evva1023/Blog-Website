import React from "react";
import { Link } from "react-router-dom";

export const LoginView = () => {
    return (
        <div className="login-container">
            <section className="login flex">
                <h1>Log In</h1>
                <form className="form">
                    <input className="form-input" type="text" placeholder="Username" />
                    <input className="form-input" type="password" placeholder="Password" />
                    <button className="form-btn">Log In</button>
                    <span>You don't have an account yet? <Link to="/register">Register Now</Link></span>
                </form>
            </section>
        </div>
    );
};