import { store } from "../store/store";
import { setTime, timerSet } from "../store/actions";

const { dispatch } = store;

export const setTimeConfig = (value) => {
    dispatch(setTime(value));
    dispatch(timerSet(value));
};

// export const setModeConfig = (value) => {
//     dispatch()
// }