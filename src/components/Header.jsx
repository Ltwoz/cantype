import React, { useEffect } from "react";
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

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        dispatch(setTheme(theme));
    }, [dispatch])

    // Set theme
    useEffect(() => {
        if (theme) {
            document.querySelector(".theme")?.childNodes.forEach((el) => {
                if (el instanceof HTMLButtonElement)
                el.classList.remove("selected");
            });
        }
    }, [dispatch, theme]);

    return (
        <>

        </>
    );
}

export default Header;
