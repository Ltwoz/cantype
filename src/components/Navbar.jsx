import React from "react";
import { Link } from "react-router-dom";
import { 
    FaInfo,
    FaKeyboard
} from "react-icons/fa"

function Navbar() {
    return (
        <div className="top">
            {/* Logo */}
            <div className="flex">
                <div className="logo-text">
                    cantype
                </div>
            </div>

            {/* Menu */}
            <div className="menu">
                <Link to="/"><FaKeyboard /></Link>
                <Link to="/About"><FaInfo /></Link>
            </div>
        </div>
    );
}

export default Navbar;
