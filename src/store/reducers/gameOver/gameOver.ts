import { initialValues } from "../../../data/initialValues/initialValues";

export type gameOverProps = {
    gameOver: boolean
}

const gameOver = (state = initialValues.isGameOver, action: {type: string}) => {
    switch (action.type) {
        case "setGameOver":
            return true
        case "RESET_GAME":
            return initialValues.isGameOver
        default:
            return state
    }
}

export default gameOver