import {gameWonProps} from "../../reducers/gameWon/gameWon";

export const getIsGameWon = (state: gameWonProps) => {
    return state.gameWon
}