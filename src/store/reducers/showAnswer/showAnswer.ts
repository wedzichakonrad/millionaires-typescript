import { initialValues} from "../../../data/initialValues/initialValues";

export type showAnswerProps = {
    showAnswer: boolean
}

const showAnswer = (state = initialValues.showAnswer, action: {type: string}) => {
    switch (action.type) {
        case "toggleShowAnswer":
            return !state
        case "RESET_GAME":
            return initialValues.showAnswer
        default:
            return state
    }
}

export default showAnswer