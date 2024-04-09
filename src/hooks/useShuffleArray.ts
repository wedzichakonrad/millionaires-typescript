import {Answer} from "../store/reducers/questionsAndAnswers/questionsAndAnswers";

export const useShuffleArray = (a: string | number | Answer | undefined, b: string | number | Answer | undefined) => {
    a = Math.round(Math.random() * (10 - 1) + 1);
    b = Math.round(Math.random() * (10 - 1) + 1);
    return a - b;
}