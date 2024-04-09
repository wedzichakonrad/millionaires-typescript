import React from "react";
import './Game-over-notification.scss'
import {useSelector} from "react-redux";
import {getCurrentQuestionIndex} from "../../../../store/selectors/questionsAndAnswers/questionsAndAnswers";
import {getPrizes} from "../../../../store/selectors/prizes/prizes";
import {getIsGameOver} from "../../../../store/selectors/gameOver/gameOver";
import {useResetGame} from "../../../../hooks/useResetGame";

const GameOverNotification = () => {

    const currentQuestionIndex = useSelector(getCurrentQuestionIndex)
    const prizes = useSelector(getPrizes)
    const isGameOver = useSelector(getIsGameOver)

    return (
        <div className={`${isGameOver ? 'game-over-notification--shown' : 'hidden'}`}>
            <p>
                {currentQuestionIndex === 0 ? 'Really man? You could not even get these 100 dollars?': ''}
                {currentQuestionIndex > 0 && currentQuestionIndex < 8 ? `You won ${prizes[currentQuestionIndex].number}usd, congrats ` : ''}
                {currentQuestionIndex > 7 && currentQuestionIndex < 10 ? `You won ${prizes[currentQuestionIndex].number}usd, here is where the real game starts.` : ''}
                {currentQuestionIndex > 9 ? ` ${prizes[currentQuestionIndex].number}usd, ok with that cash you can start your life anew. ` : ''}
            </p>
            <button onClick={useResetGame}>I want to play again!</button>
        </div>
    )
}

export default GameOverNotification