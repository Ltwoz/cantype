import React from "react";
import { currentCommands } from "../helpers/commandline-lists";

function CommandLine() {
    // function updateSuggestedCommands() {
    //     for (let idx = 0; idx < defalutCommands.list ) {}
    // }

    return (
        <div id="commandLineWrapper" className="hidden">
            <div id="commandLine">
                <div>
                    <input className="input" placeholder="Type to search" />
                </div>
                <div className="suggestions">
                    {currentCommands.list.map((obj, idx) => (
                        <div className="cmdlist" command={obj.id} key={idx}>
                            {obj.display}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CommandLine;
