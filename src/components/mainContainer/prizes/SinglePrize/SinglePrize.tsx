import React from "react";
import './Single-prize.scss'
import {useSelector} from "react-redux";
import {getCurrentQuestionIndex} from "../../../../store/selectors/questionsAndAnswers/questionsAndAnswers";
import {getIsGameWon} from "../../../../store/selectors/gameWon/gameWon";

export interface SinglePrizeProps {
    prizeAmount: number,
    index: number,
}

const SinglePrize = ({prizeAmount, index}: SinglePrizeProps) => {

    const currentQuestionIndex = useSelector(getCurrentQuestionIndex)
    const isGameWon = useSelector(getIsGameWon)

    return (
        <li className={`${
            (index + 1) % 5 === 0 ? 'single-prize single-prize__white-theme' : 'single-prize'} ${
            index < currentQuestionIndex || isGameWon ? 'single-prize--guaranteed-stake' : ''} ${
            currentQuestionIndex === index && !isGameWon ? 'single-prize--current-stake' : ''}`}
        >
            <p className='single-prize__number'>{index + 1}</p>
            <span className='single-prize__diamond'/>
            <span className='single-prize__value'>{prizeAmount}</span>
            <span>usd</span>
        </li>
    )
}

export default SinglePrize