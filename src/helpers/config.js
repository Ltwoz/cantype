import { store } from "../store/store";
import { setTime, timerSet, setMode } from "../store/actions";

const { dispatch } = store;

export const setTimeConfig = (value) => {
    dispatch(setTime(value));
    dispatch(timerSet(value));
};

export const setModeConfig = (value) => {
    dispatch(setMode(value));
}