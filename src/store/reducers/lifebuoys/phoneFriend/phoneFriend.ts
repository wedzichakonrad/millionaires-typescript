import { initialValues } from "../../../../data/initialValues/initialValues";

export type phoneFriendProps = {
    phoneFriend: boolean
}

const phoneFriend = (state = initialValues.isFriendCalled, action: {type: string}) => {
    switch (action.type) {
        case "doPhoneFriend":
            return !state
        case "RESET_GAME":
            return initialValues.isFriendCalled
        default:
            return state
    }
}

export default phoneFriend