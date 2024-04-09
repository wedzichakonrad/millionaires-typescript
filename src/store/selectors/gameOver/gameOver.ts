import {gameOverProps} from "../../reducers/gameOver/gameOver";

export const getIsGameOver = (state: gameOverProps) => {
    return state.gameOver
}