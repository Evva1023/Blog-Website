import React from "react";
import { Link } from "react-router-dom";

export const RegisterView = () => {
    return (
        <div className="login-container">
            <section className="login flex">
                <h1>Register</h1>
                <form className="form">
                    <input className="form-input" type="text" placeholder="Username" required />
                    <input className="form-input" type="email" placeholder="Email" required />
                    <input className="form-input" type="password" placeholder="Password" required />
                    <input className="form-input" type="password" placeholder="Confirm password" required />
                    <button className="form-btn">Register</button>
                    <span>Already have an account? <Link to="/login">Log In</Link></span>
                </form>
            </section>
        </div>
    );
};