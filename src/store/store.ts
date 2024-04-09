import {createStore, combineReducers} from "redux";
import questionsAndAnswers from "./reducers/questionsAndAnswers/questionsAndAnswers";
import prizes from "./reducers/prizes/prizes";
import phoneFriend from "./reducers/lifebuoys/phoneFriend/phoneFriend";
import askAudience from "./reducers/lifebuoys/askAudience/askAudience";
import fiftyFifty from "./reducers/lifebuoys/fiftyFifty/fiftyFifty";
import gameOver from "./reducers/gameOver/gameOver";
import disablePhoneFriend from "./reducers/lifebuoys/phoneFriend/disablePhoneFriend";
import disableAskAudience from "./reducers/lifebuoys/askAudience/disableAskAudience";
import gameWon from "./reducers/gameWon/gameWon";
import showAnswer from "./reducers/showAnswer/showAnswer";

export const allReducers = combineReducers({
    questionsAndAnswers,
    prizes,
    phoneFriend,
    askAudience,
    fiftyFifty,
    gameOver,
    disablePhoneFriend,
    disableAskAudience,
    gameWon,
    showAnswer,
})

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store