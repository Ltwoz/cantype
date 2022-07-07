export const defalutCommands = {
    title: "",
    list: [
        {
            id: "changeTimeConfig",
            display: "Time...",
            subgroup: true,
            exec: () => {
                currentCommands = commandsTimeConfig;
            }
        },
        {
            id: "2",
            display: "2",
            subgroup: true,
            exec: () => {
                currentCommands = commandsTimeConfig;
            }
        },
        {
            id: "3",
            display: "3",
            subgroup: true,
            exec: () => {
                currentCommands = commandsTimeConfig;
            }
        },
        {
            id: "4",
            display: "4",
            subgroup: true,
            exec: () => {
                currentCommands = commandsTimeConfig;
            }
        },
        {
            id: "5",
            display: "5",
            subgroup: true,
            exec: () => {
                currentCommands = commandsTimeConfig;
            }
        },
    ]
}

const commandsTimeConfig = {
    title: "Change time config...",
    list: [
        {
            id: "changeTimeConfig15",
            display: 15,
            configValue: 15,
        },
        {
            id: "changeTimeConfig30",
            display: 30,
            configValue: 30,
        },
        {
            id: "changeTimeConfig45",
            display: 45,
            configValue: 45,
        },
        {
            id: "changeTimeConfig60",
            display: 60,
            configValue: 60,
        },
        {
            id: "changeTimeConfig120",
            display: 120,
            configValue: 120,
        },
    ]
}

export let currentCommands = defalutCommands;