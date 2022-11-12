import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Logo } from "../Logo/Logo";
import "./Header.css";

export const Header = () => {
    return (
        <header className="flex">
            <Logo />
            <Navbar />
        </header>
    )
};