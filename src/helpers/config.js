import { store } from "../store/store";
import { setTime, timerSet, setMode, setLayout } from "../store/actions";

const { dispatch } = store;

export const setTimeConfig = (value) => {
    localStorage.setItem("time", value);
    dispatch(setTime(value));
    dispatch(timerSet(value));
};

export const setModeConfig = (value) => {
    localStorage.setItem("type", value);
    dispatch(setMode(value));
};

export const setLayoutConfig = (value) => {
    localStorage.setItem("layout", value);
    dispatch(setLayout(value))
};
