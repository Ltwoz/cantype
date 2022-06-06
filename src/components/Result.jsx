import React from "react";
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
    const wpm = ((correctChars + spaces) * 60) / 60 / 5;

    return <div></div>;
}

export default Result;