import { initialValues } from "../../../../data/initialValues/initialValues";

export type fiftyFiftyProps = {
    fiftyFifty: boolean
}

const fiftyFifty = (state = initialValues.isFiftyFiftyUsed, action: {type: string}) => {
    switch (action.type) {
        case "doFiftyFifty":
            return true
        case "RESET_GAME":
            return initialValues.isFiftyFiftyUsed
        default:
            return state
    }
}

export default fiftyFifty