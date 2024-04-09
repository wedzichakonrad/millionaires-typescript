import React from "react";
import Logo from "./logo/Logo";
import Question from "./question/Question";
import AnswersContainer from "./answersContainer/AnswersContainer";
import Lifebuoys from "./lifebuoys/Lifebuoys";
import Prizes from "./prizes/Prizes";
import './Main-container.scss'
import NotificationsBackground from "./notifications/notificationsBackground/NotificationsBackground";
import {useSelector} from "react-redux";
import {getIsAudienceAsked, getIsFriendCalled} from "../../store/selectors/lifebuoys/lifebuoys";
import {getIsGameOver} from "../../store/selectors/gameOver/gameOver";
import store from "../../store/store";
import {doPhoneFriend} from "../../store/actions/lifebuoys/phoneFriend";
import {doAskAudience} from "../../store/actions/lifebuoys/askAudience";
import {getIsGameWon} from "../../store/selectors/gameWon/gameWon";

const MainContainer = () => {

    const isFriendCalled = useSelector(getIsFriendCalled)
    const isAudienceAsked = useSelector(getIsAudienceAsked)
    const isGameOver = useSelector(getIsGameOver)
    const isGameWon = useSelector(getIsGameWon)

    const hideNotifications = () => {
        if (isAudienceAsked) {
            store.dispatch(doAskAudience())
        }
        if (isFriendCalled) {
            store.dispatch(doPhoneFriend())
        }
    }

    return (
        <main onClick={hideNotifications} className='main-container'>
            <NotificationsBackground/>
            <section className={`${isFriendCalled || isAudienceAsked || isGameOver || isGameWon ? 'main-container__left main-container__left--darkened': 'main-container__left'}`}>
                <Logo/>
                <Question/>
                <AnswersContainer/>
            </section>
            <section className={`${isFriendCalled || isAudienceAsked || isGameOver || isGameWon ? 'main-container__right main-container__right--darkened': 'main-container__right'}`}>
                <Lifebuoys/>
                <Prizes/>
            </section>
        </main>
    )
}

export default MainContainer