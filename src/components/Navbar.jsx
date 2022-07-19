import React from "react";
import { Link } from "react-router-dom";
import { FaInfo, FaKeyboard, FaCog, FaPalette } from "react-icons/fa";
import { resetTest } from "../helpers/resetTest";
import { useSelector, useDispatch } from "react-redux";
import { setIsCmdLine } from "../store/actions";

function Navbar() {
    const {
        toggle: { isCmdLine },
    } = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleChangeRoute = () => {
        resetTest();
    }

    const handleSetting = () => {
        dispatch(setIsCmdLine(true))
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
                <div className="button" onClick={handleSetting}>
                    <FaCog  />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
