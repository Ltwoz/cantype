import React from "react";
import { FaRedoAlt } from "react-icons/fa";
import { resetTest } from "../helpers/resetTest";

export function ResetButton(props) {
    const reset = () => {
        resetTest();
        document.getElementsByClassName("word")[0].scrollIntoView();
    };

    return (
        <div className="bottom">
            <div className="reset-button" onClick={reset}>
                <FaRedoAlt size={props.size} />
            </div>
        </div>
    );
}
