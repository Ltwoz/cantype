import React from "react";
import { Link } from "react-router-dom";
import { 
    FaInfo,
    FaKeyboard,
    FaCog
} from "react-icons/fa"

function Navbar() {
    return (
        <div className="top">
            {/* Logo */}
            <div className="logo">
                cantype
            </div>

            {/* Menu */}
            <div className="menu">
                <Link to="/"><FaKeyboard /></Link>
                <Link to="/About"><FaInfo /></Link>
                <Link to="/Settings"><FaCog /></Link>
            </div>
        </div>
    );
}

export default Navbar;
