import React from "react";
import { FaRedoAlt } from "react-icons/fa";
import { resetTest } from "../helpers/resetTest";

export function ResetButton() {
    const reset = () => {
        resetTest();
        document.getElementsByClassName("word")[0].scrollIntoView();
    };

    return (
        <div className="bottom">
            <div className="reset-button" onClick={reset}>
                <FaRedoAlt />
            </div>
        </div>
    );
}
