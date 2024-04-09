import { initialValues } from "../../../../data/initialValues/initialValues";

export type disableAskAudienceProps = {
    disableAskAudience: boolean
}

const disableAskAudience = (state = initialValues.disableAskAudience, action: {type: string}) => {
    switch (action.type) {
        case "doDisableAskAudience":
            return true
        case "RESET_GAME":
            return initialValues.disableAskAudience
        default:
            return state
    }
}

export default disableAskAudience