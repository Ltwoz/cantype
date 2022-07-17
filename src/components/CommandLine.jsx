import React, { useRef, useState, useEffect } from "react";
import { currentCommands } from "../helpers/commandline-lists";
import { FaSearch } from "react-icons/fa";

function CommandLine(props) {
    // function updateSuggestedCommands() {
    //     for (let idx = 0; idx < defalutCommands.list ) {}
    // }

    const [inputVal, setInputVal] = useState("");
    const commandInput = useRef(null);

    // useEffect(() => {
    //     inputVal.toLowerCase().split(" ");
    //     if (inputVal[0] === " ") {
    //         console.log("input");
    //         console.log(inputVal);
    //     }
    // }, [inputVal])

    const filteredSearch = currentCommands.list.filter((val) => {
        if (inputVal === "") {
            return val;
        } else if (val.display.toLowerCase().includes(inputVal.toLowerCase())) {
            return val;
        }
    });

    const handlePalletKeys = (e) => {
        if (e.key === "Tab") {
            e.preventDefault();
        }
        if (e.key === "Escape") {
            props.setShowCmd(false);
            e.preventDefault();
        }
        if (e.key === "Enter") {
            e.preventDefault();
            let command = document
                .querySelector(".cmdlist")
                .getAttribute("command");
            let subgroup = false;
            currentCommands.list.forEach((obj) => {
                if (obj.id === command) {
                    obj.exec();
                    console.log(obj.display);
                }
            });
            if (!subgroup) console.log("hide");
            return;
        }
        if (e.key === "ArrowUp" || e.key === "ArrowDown") {
            e.preventDefault();
            const cmdLists = Array.from(document.querySelectorAll(".cmdlist"));
            let activenum = -1;
            let hoverId = "";

            cmdLists.forEach((obj, idx) => {
                if (obj.classList.contains("activeCmd")) {
                    activenum = idx;
                }
            });

            if (e.key === "ArrowUp") {
                cmdLists.forEach((obj, idx) => {
                    obj.classList.remove("activeCmd");
                })
                if (activenum === 0) {
                    cmdLists[cmdLists.length - 1].classList.add("activeCmd");
                } else {
                    cmdLists[--activenum].classList.add("activeCmd");
                }
            }

            if (e.key === "ArrowDown") {
                cmdLists.forEach((obj, idx) => {
                    obj.classList.remove("activeCmd");
                })
                if (activenum + 1 == cmdLists.length) {
                    cmdLists[0].classList.add("activeCmd");
                } else {
                    cmdLists[++activenum].classList.add("activeCmd");
                }
            }

            try {
                const scroll =Math.abs()
            } catch(e) {
                if (e instanceof Error) {
                    console.log("could not scroll suggestions :", e.message);
                }
            }
        }
        e.stopPropagation();
    };

    // const updateSuggestedCommands = () => {
    //     inputVal.toLowerCase().split(" ");
    //     if (inputVal[0] === "") {
    //         currentCommands.list.forEach((obj, idx) => {
    //             let foundcount = 0;

    //         })
    //     }
    // }

    return (
        <div className="commandLineWrapper" onKeyDown={handlePalletKeys}>
            <div className="commandLine">
                <div className="input-box">
                    <div className="search-icon">
                        <FaSearch />
                    </div>
                    <input
                        className="input"
                        placeholder="Type to search"
                        type="text"
                        ref={commandInput}
                        // onBlur={({target}) => {target.focus()}}
                        autoFocus
                        maxLength={32}
                        onChange={(e) => {
                            setInputVal(e.target.value);
                        }}
                        value={inputVal}
                        // onKeyDown={(e) => {
                        //     handleCommandSelected(e);
                        // }}
                    />
                </div>
                {filteredSearch.length > 0 && (
                    <div className="suggestions">
                        {filteredSearch.map((obj, idx) => (
                            <div
                                className="cmdlist"
                                command={obj.id}
                                key={idx}
                            >
                                {obj.display}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default CommandLine;
