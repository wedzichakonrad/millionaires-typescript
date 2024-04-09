import { phoneFriendProps } from "../../reducers/lifebuoys/phoneFriend/phoneFriend";
import { askAudienceProps } from "../../reducers/lifebuoys/askAudience/askAudience";
import { fiftyFiftyProps } from "../../reducers/lifebuoys/fiftyFifty/fiftyFifty";
import {disablePhoneFriendProps} from "../../reducers/lifebuoys/phoneFriend/disablePhoneFriend";
import {disableAskAudienceProps} from "../../reducers/lifebuoys/askAudience/disableAskAudience";

export const getIsFriendCalled = (state: phoneFriendProps) => {
    return state.phoneFriend
}

export const getIsPhoneFriendDisabled = (state: disablePhoneFriendProps) => {
    return state.disablePhoneFriend
}

export const getIsAudienceAsked= (state: askAudienceProps) => {
    return state.askAudience
}

export const getIsAskAudienceDisabled = (state: disableAskAudienceProps) => {
    return state.disableAskAudience
}

export const getIsFiftyFiftyUsed = (state: fiftyFiftyProps) => {
    return state.fiftyFifty
}