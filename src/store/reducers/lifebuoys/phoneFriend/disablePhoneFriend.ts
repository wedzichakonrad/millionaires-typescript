import { initialValues } from "../../../../data/initialValues/initialValues";

export type disablePhoneFriendProps = {
    disablePhoneFriend: boolean
}

const disablePhoneFriend = (state = initialValues.disablePhoneFriend, action: {type: string}) => {
    switch (action.type) {
        case "doDisablePhoneFriend":
            return true
        case "RESET_GAME":
            return initialValues.disablePhoneFriend
        default:
            return state
    }
}

export default disablePhoneFriend