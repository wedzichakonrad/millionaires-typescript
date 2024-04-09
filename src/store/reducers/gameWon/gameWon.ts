import { initialValues } from "../../../data/initialValues/initialValues";

export type gameWonProps = {
    gameWon: boolean
}

const gameWon = (state = initialValues.isGameWon, action: {type: string}) => {
    switch (action.type) {
        case "setGameWon":
            return true
        case "RESET_GAME":
            return initialValues.isGameWon
        default:
            return state
    }
}

export default gameWon