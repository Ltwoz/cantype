import React, { useRef, useState, useEffect } from "react";
import { currentCommands, setCurrentCommands, defalutCommands } from "../helpers/commandline-lists";
import { useSelector, useDispatch } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { setIsCmdLine } from "../store/actions";

function CommandLine() {
    const {
        toggle: { isCmdLine },
    } = useSelector((state) => state);
    const dispatch = useDispatch();

    const [inputVal, setInputVal] = useState("");
    const [subgroup, setSubgroup] = useState(false);
    const [isInput, setIsInput] = useState(false);
    const commandInput = useRef(null);

    const filteredSearch = currentCommands.list.filter((val) => {
        if (inputVal === "") {
            return val;
        } else if (val.display.toLowerCase().includes(inputVal.toLowerCase())) {
            return val;
        }
    });

    const trigger = (command) => {
        currentCommands.list.forEach((obj, idx) => {
            if (obj.id == command) {
                if (obj.input) {
                    setIsInput(true);
                    const escaped = obj.display.split("</i>")[1] ?? obj.display;
                    console.log("this thing has to input");
                } else if (obj.subgroup) {
                    setSubgroup(true);
                    // setCommand(obj.subgroup.list);
                    setCurrentCommands(obj.subgroup);
                } else {
                    if (obj.exec) {
                        obj.exec();
                        dispatch(setIsCmdLine(false))
                    }
                }
            }
        });
    }

    const restoreCommand = (sshow = true) => {
        if (filteredSearch.length < 1) {
            setCurrentCommands(defalutCommands);
        }
    }

    const handlePalletKeys = (e) => {
        if (e.key === "Tab") {
            e.preventDefault();
        }
        if (e.key === "Escape" && isCmdLine === true) {
            dispatch(setIsCmdLine(false))
            e.preventDefault();
        }
        if (e.key === "Enter") {
            e.preventDefault();
            const command = document
                .querySelector(".cmdlist.activeCmd")
                .getAttribute("command");
            trigger(command);
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
                });
                if (activenum === 0) {
                    cmdLists[cmdLists.length - 1].classList.add("activeCmd");
                } else {
                    cmdLists[--activenum].classList.add("activeCmd");
                }
            }

            if (e.key === "ArrowDown") {
                cmdLists.forEach((obj, idx) => {
                    obj.classList.remove("activeCmd");
                });
                if (activenum + 1 == cmdLists.length) {
                    cmdLists[0].classList.add("activeCmd");
                } else {
                    cmdLists[++activenum].classList.add("activeCmd");
                }
            }

            try {
                const scroll = Math.abs();
            } catch (e) {
                if (e instanceof Error) {
                    console.log("could not scroll suggestions :", e.message);
                }
            }
        }
        e.stopPropagation();
    };

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
                            <div className="cmdlist" command={obj.id} key={idx}>
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
