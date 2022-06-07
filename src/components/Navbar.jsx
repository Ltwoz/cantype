import React from "react";
import { Link } from "react-router-dom";
import { FaInfo, FaKeyboard, FaCog, FaPalette } from "react-icons/fa";

function Navbar() {
    return (
        <div className="top">
            {/* Logo */}
            <div className="logo">cantype</div>

            {/* Menu */}
            <div className="menu">
                <Link to="/" className="button">
                    <FaKeyboard />
                </Link>
                <Link to="/About" className="button">
                    <FaInfo />
                </Link>
                <Link to="/Theme" className="button">
                    <FaPalette />
                </Link>
                <Link to="/Setting" className="button">
                    <FaCog  />
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
