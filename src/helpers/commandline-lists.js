import { setModeConfig, setTimeConfig } from "./config";
import { resetTest } from "./resetTest";

const commandsTimeConfig = {
    title: "Change time config...",
    list: [
        {
            id: "changeTimeConfig15",
            display: "15",
            configValue: 15,
            exec: () => {
                console.log("chang time 15");
                setTimeConfig(15);
                resetTest();
            },
        },
        {
            id: "changeTimeConfig30",
            display: "30",
            configValue: 30,
            exec: () => {
                console.log("chang time 30");
                setTimeConfig(30);
                resetTest();
            },
        },
        {
            id: "changeTimeConfig45",
            display: "45",
            configValue: 45,
            exec: () => {
                console.log("chang time 45");
                setTimeConfig(45);
                resetTest();
            },
        },
        {
            id: "changeTimeConfig60",
            display: "60",
            configValue: 60,
            exec: () => {
                console.log("chang time 60");
                setTimeConfig(60);
                resetTest();
            },
        },
        {
            id: "changeTimeConfig120",
            display: "120",
            configValue: 120,
            exec: () => {
                console.log("chang time 120");
                setTimeConfig(120);
                resetTest();
            },
        },
    ],
};

const commandsTypeConfig = {
    title: "Change type config...",
    list: [
        {
            id: "changeTypeConfigTime",
            display: "time",
            configValue: "time",
            exec: () => {
                console.log("change type time");
                setModeConfig("time");
                resetTest();
            },
        },
        {
            id: "changeTypeConfigWords",
            display: "words",
            configValue: "words",
            exec: () => {
                console.log("change type words");
                setModeConfig("words");
                resetTest();
            },
        },
        {
            id: "changeTypeConfigCustom",
            display: "custom",
            configValue: "custom",
            exec: () => {
                console.log("change type custom");
                setModeConfig("custom"); 
                resetTest();
            },
        },
    ],
};

export const defalutCommands = {
    title: "",
    list: [
        {
            id: "changeTimeConfig",
            display: "Time...",
            subgroup: commandsTimeConfig,
        },
        {
            id: "changeTypeConfig",
            display: "Type...",
            subgroup: commandsTypeConfig,
        },
        {
            id: "changeThemeConfig",
            display: "Theme...",
            subgroup: commandsTypeConfig,
        },
    ],
};

export let currentCommands = defalutCommands;
export function setCurrentCommands(commands) {
    currentCommands = commands;
}
