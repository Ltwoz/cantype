import React from "react";
import { Link } from "react-router-dom";
import { FaInfo, FaKeyboard, FaCog, FaPalette } from "react-icons/fa";
import { resetTest } from "../helpers/resetTest";

function Navbar() {

    const handleChangeRoute = () => {
        resetTest();
    }

    return (
        <div className="top">
            {/* Logo */}
            <div className="logo">cantype</div>

            {/* Menu */}
            <div className="menu">
                <Link to="/" className="button">
                    <FaKeyboard />
                </Link>
                <Link to="/About" className="button" onClick={handleChangeRoute}>
                    <FaInfo />
                </Link>
                <div className="button">
                    <FaPalette />
                </div>
                <div className="button">
                    <FaCog  />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
