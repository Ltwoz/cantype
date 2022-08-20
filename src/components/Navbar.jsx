import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaInfo, FaKeyboard, FaCog, FaPalette } from "react-icons/fa";
import { resetTest } from "../helpers/resetTest";
import { useSelector, useDispatch } from "react-redux";
import { setIsCmdLine, setIsTheme } from "../store/actions";
import {
    setCurrentCommands,
    defalutCommands,
} from "../helpers/commandline-lists";
import Mascot from "./Mascot";

function Navbar() {
    const {
        preferences: { theme },
        toggle: { isCmdLine },
    } = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleChangeRoute = () => {
        resetTest();
    };

    const handleSetting = () => {
        dispatch(setIsCmdLine(true));
        setCurrentCommands(defalutCommands);
    };

    const handleTheme = () => {
        dispatch(setIsTheme(true));
    };

    return (
        <div className="top">
            {/* Logo */}
            <div className="logo">
                <Link to="/" onClick={handleChangeRoute}>
                    <Mascot />
                    <div className="logo-text">cantype</div>
                </Link>
            </div>

            {/* Menu */}
            <div className="menu">
                <Link to="/" className="button" onClick={handleChangeRoute}>
                    <FaKeyboard />
                </Link>
                <Link
                    to="/About"
                    className="button"
                    onClick={handleChangeRoute}
                >
                    <FaInfo />
                </Link>
                <div className="button" onClick={handleTheme}>
                    <FaPalette />
                </div>
                <div className="button" onClick={handleSetting}>
                    <FaCog />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
