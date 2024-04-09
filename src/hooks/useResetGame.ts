import store from "../store/store";

export const useResetGame = () => {
    store.dispatch({type: 'RESET_GAME'})
}