import React from "react";
import './Notifications-background.scss'
import {useSelector} from "react-redux";
import {getIsAudienceAsked, getIsFriendCalled} from "../../../../store/selectors/lifebuoys/lifebuoys";
import PhoneFriendNotification from "../phoneFriendNotification/PhoneFriendNotification";
import GameOverNotification from "../gameOverNotification/GameOverNotification";
import {getIsGameOver} from "../../../../store/selectors/gameOver/gameOver";
import AskAudienceNotification from "../askAudienceNotification/AskAudienceNotification";
import GameWonNotification from "../gameWonNotification/GameWonNotification";
import {getIsGameWon} from "../../../../store/selectors/gameWon/gameWon";

const NotificationsBackground = () => {

    const isFriendCalled = useSelector(getIsFriendCalled)
    const isAudienceAsked = useSelector(getIsAudienceAsked)
    const isGameOver = useSelector(getIsGameOver)
    const isGameWon = useSelector(getIsGameWon)

    return (
        <div className={`${isFriendCalled || isAudienceAsked || isGameOver || isGameWon ? 'notifications-background--shown' : 'hidden'}`}>
            <PhoneFriendNotification/>
            <GameOverNotification/>
            <AskAudienceNotification/>
            <GameWonNotification/>
        </div>
    )
}

export default NotificationsBackground