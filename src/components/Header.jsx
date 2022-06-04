import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    setTheme,
    timerSet,
    setWordList
} from "../store/actions";

export const options = {
    theme: [
        "default",
        "mkbhd"
    ]
};

function Header() {

    const {
        preferences: { theme },
    } = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <>

        </>
    );
}

export default Header;
