import { capitalizeFirstLetterOfEachWord, getThemeList } from "../utils/misc";
import { setLayoutConfig, setModeConfig, setTimeConfig } from "./config";
import { resetTest } from "./resetTest";
import { store } from "../store/store";
import { setTheme } from "../store/actions";

const { dispatch } = store;

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
        {
            id: "changeTimeConfigCustom",
            display: "custom",
            input: true,
            exec: (input) => {
                if (!input) return;
                console.log("chang time custom");
                setTimeConfig(parseInt(input));
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

const commandsThemeConfig = {
    title: "Theme...",
    configKey: "theme",
    list: [],
};

const commandsLayoutConfig = {
    title: "Layout...",
    list: [
        {
            id: "changeLayoutSingle",
            display: "Single",
            configValue: "single",
            exec: () => {
                console.log("changed layout single");
                setLayoutConfig("single");
                resetTest();
            }
        },
        {
            id: "changeLayoutMulti",
            display: "Multi",
            configValue: "multi",
            exec: () => {
                console.log("changed layout multi");
                setLayoutConfig("multi");
                resetTest();
            }
        },
    ]
}

getThemeList().then((themes) => {
    themes.forEach((theme) => {
        commandsThemeConfig.list.push({
            id: "changeTheme" + capitalizeFirstLetterOfEachWord(theme.name),
            display: theme.name.replace(/_/g, " "),
            configValue: theme.name,
            exec: () => {
                dispatch(setTheme(theme.name))
            }
        })
    })
})

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
            subgroup: commandsThemeConfig,
        },
        {
            id: "changeLayoutConfig",
            display: "Layout...",
            subgroup: commandsLayoutConfig,
        },
    ],
};

export let currentCommands = defalutCommands;
export function setCurrentCommands(commands) {
    currentCommands = commands;
}
