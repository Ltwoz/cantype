import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ResetButton } from "./ResetButton";

function Result() {
    const {
        word: { wordList, typedHistory, currWord },
    } = useSelector((state) => state);

    let totalChars = 0;
    let correctChars = 0;
    let incorrectChars = 0;
    let correctWords = 0;
    let incorrectWords = 0;
    let missedChars = 0;

    const spaces = wordList.indexOf(currWord);
    const result = typedHistory.map((typedWord, idx) => {
        typedWord === wordList[idx];
    });
    
    for (let i = 0; i < result.length; i++) {
        if (result.length) {
            totalChars += wordList[i].length;
            for (let c = 0; c < wordList[i].length; c++) {
                try {
                    if (typedHistory[i][c] == wordList[i][c]) {
                        correctChars++;
                    } else {
                        incorrectChars++;
                    }
                } catch (err) {
                    incorrectChars++;
                }
            }
            if (typedHistory[i].length < wordList[i].length) {
                missedChars += wordList[i].length - typedHistory[i].length;
            }
            console.log('-----------------------');
            console.log('totalchar : ', totalChars);
            console.log('correctChar : ', correctChars);
            console.log('incorrectChar : ', incorrectChars);
            console.log('missedChar : ', missedChars);
        }
    }
    const wpm = Math.round(((correctChars + spaces) * 60) / 30 / 5);
    const acc = Math.round(((correctChars + spaces) / totalChars) * 100);

    return (
        <div className="result">
            {/* {Math.round(wpm)} wpm */}

            <div className="stats">
                <div className="wpm">
                    <div className="img">wpm</div>
                    <p>{`${wpm} wpm`}</p>
                </div>
                <div className="acc">
                    <div className="img">acc</div>
                    <p>{`${acc}%`}</p>
                </div>
                <div className="correct">
                    <div className="img">correct chars</div>
                    <p>{correctChars}</p>
                </div>
                <div className="incorrect">
                    <div className="img">incorrect chars</div>
                    <p>{incorrectChars}</p>
                </div>
            </div>
            <ResetButton size="35" />
        </div>
    );
}

export default Result;
