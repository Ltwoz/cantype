import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function Result() {
    const {
        word: { wordList, typedHistory, currWord },
    } = useSelector((state) => state);
    const spaces = wordList.indexOf(currWord);
    let correctChars = 0;
    const result = typedHistory.map((typedWord, idx) => {
        typedWord === wordList[idx];
    });
    result.forEach((r, idx) => {
        if (r) {
            correctChars += wordList[idx].length;
        }
    });

    const wpm = ((correctChars + spaces) * (60 / 30)) / 5;

    return (
        <div className="result">
            {Math.round(wpm)} wpm
        </div>
    );
}

export default Result;