import React from "react";

export const LoginView = () => {
    return (
        <div className="login-container">
            <section className="login flex">
                <h1>Log In</h1>
                <form className="login-form">
                    <input className="login-form-input" type="text" placeholder="Username" />
                    <input className="login-form-input" type="password" placeholder="Password" />
                    <button className="login-form-btn">Log In</button>
                </form>
            </section>
        </div>
    );
};