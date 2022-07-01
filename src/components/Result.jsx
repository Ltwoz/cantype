import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ResetButton } from "./ResetButton";

function Result() {
    // const {
    //     word: { wordList, typedHistory, currWord },
    // } = useSelector((state) => state);
    // const spaces = wordList.indexOf(currWord);
    // let correctChars = 0;
    // const result = typedHistory.map((typedWord, idx) => {
    //     typedWord === wordList[idx];
    // });
    // result.forEach((r, idx) => {
    //     if (r) {
    //         correctChars += wordList[idx].length;
    //     }
    // });

    // const wpm = ((correctChars + spaces) * (60 / 30)) / 5;

    return (
        <div className="result">
            {/* {Math.round(wpm)} wpm */}

            <div className="stats">
                <div className="wpm">
                    <div className="img"></div>
                    <p>44 wpm</p>
                </div>
                <div className="acc">
                    <div className="img"></div>
                    <p>91%</p>
                </div>
                <div className="correct">
                    <div className="img"></div>
                    <p>16</p>
                </div>
                <div className="incorrect">
                    <div className="img"></div>
                    <p>6</p>
                </div>
            </div>
            <ResetButton />
        </div>
    );
}

export default Result;
