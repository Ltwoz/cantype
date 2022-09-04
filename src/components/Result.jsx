import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTestActive, setTestEnd } from "../store/actions";
import { ResetButton } from "./ResetButton";

function Result() {
    const {
        time: { testStart, testEnd },
        word: { wordList, typedHistory, currWord },
        preferences: { timeLimit, mode },
    } = useSelector((state) => state);
    const dispatch = useDispatch();

    const [wpm, setWpm] = useState(0);
    const [acc, setAcc] = useState(0);

    let totalChars = 0;
    let correctChars = 0;
    let incorrectChars = 0;

    const spaces = wordList.indexOf(currWord);
    const result = typedHistory?.map((typedWord, idx) => {
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
        }
    }

    useEffect(() => {
        if (mode === "time") {
            setWpm(Math.round(((correctChars + spaces) * 60) / timeLimit / 5));
        } else if (mode === "words" || mode === "custom") {
            const endTime = Date.now()
            const testDiff = (endTime - testStart) / 1000;

            console.log("testDiff : ",testDiff);
            console.log("testStart : ",testStart);
            console.log("testEnd : ", endTime);
            
            dispatch(setTestEnd(endTime));
            setWpm(Math.round(((correctChars + spaces) * 60) / testDiff / 5));
        }
        setAcc(Math.round((correctChars / totalChars) * 100));
    }, []);

    useEffect(() => {
        console.log("-----------------------");
        console.log("totalchar : ", totalChars);
        console.log("correctChar : ", correctChars);
        console.log("incorrectChar : ", incorrectChars);
        console.log("spaces : ", spaces);
    }, []);

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
                    <p>{`${isNaN(acc) ? "100" : acc}%`}</p>
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
