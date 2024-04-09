import { initialValues } from "../../../../data/initialValues/initialValues";

export type askAudienceProps = {
    askAudience: boolean
}

const askAudience = (state = initialValues.isAudienceAsked, action: {type: string}) => {
    switch (action.type) {
        case "doAskAudience":
            return !state
        case "RESET_GAME":
            return initialValues.isAudienceAsked
        default:
            return state
    }
}

export default askAudience