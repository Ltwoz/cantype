import { setTimerId, setWordList, timerSet } from "../store/actions";
import { store } from "../store/store";

export const resetTest = async () => {
    const { dispatch, getState } = store;

    const {
        time: { timerId },
    } = getState();

    document
        .querySelectorAll(".wrong, .right")
        .forEach((el) => el.classList.remove("wrong", "right"));

    if (timerId) {
        clearInterval(timerId);
        dispatch(setTimerId(null));
    }

    import(`../wordlist/words.json`).then((words) => {
        dispatch(setWordList(words.default));
    });
};
