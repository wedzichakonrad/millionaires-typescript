import React from "react";
import './GameWonNotification.scss'
import {useSelector} from "react-redux";
import {getIsGameWon} from "../../../../store/selectors/gameWon/gameWon";
import {useResetGame} from "../../../../hooks/useResetGame";

const GameWonNotification = () => {

    const isGameWon = useSelector(getIsGameWon)

    return (
        <div className={`${isGameWon ? 'game-won-notification--shown' : 'hidden'}`}>
            <p>
                Wooooooah MILLION dollars is now yours... now you can make your dreams come true!
            </p>
            <button onClick={useResetGame}>That's not enough... I need more!</button>
        </div>
    )
}

export default GameWonNotification