import React, { useState } from "react";
import './Single-answer.scss'
import store from "../../../../store/store";
import {answersLetters} from "../../../../data/questionsAndAnswers/questionsAndAnswers";
import {setNextQuestion} from "../../../../store/actions/setNextQuestion/setNextQuestion";
import {setGameOver} from "../../../../store/actions/gameOver/gameOver";
import {Answer} from "../../../../store/reducers/questionsAndAnswers/questionsAndAnswers";
import {initialValues} from "../../../../data/initialValues/initialValues";
import {useSelector} from "react-redux";
import {getCurrentQuestionIndex} from "../../../../store/selectors/questionsAndAnswers/questionsAndAnswers";
import {setGameWon} from "../../../../store/actions/gameWon/gameWon";
import {getShowAnswer} from "../../../../store/selectors/showAnswer/showAnswer";
import {toggleShowAnswer} from "../../../../store/actions/showAnswer/showAnswer";

export interface SingleAnswerProps {
    answerContent: string,
    isCorrect: boolean,
    disabledAnswers: Answer[] | undefined,
    index: number
    isAnswerDisabled: boolean,
    setIsAnswerDisabled: React.Dispatch<React.SetStateAction<boolean>>
}

const SingleAnswer = ({answerContent, isCorrect, isAnswerDisabled, disabledAnswers, index, setIsAnswerDisabled}: SingleAnswerProps) => {

    const [isPending, setIsPending] = useState(false)
    const [isChosen, setIsChosen] = useState(false)

    const showAnswer = useSelector(getShowAnswer)
    const currentQuestionsIndex = useSelector(getCurrentQuestionIndex)

    const checkAnswer = () => {
        setIsAnswerDisabled(true)
        setIsPending(true)
        setTimeout(markAnswer, initialValues.answerCheckAndMarkDelay)
        setIsChosen(true)
    }

    const markAnswer = () => {
        setIsPending(false)
        store.dispatch(toggleShowAnswer())
        if (isCorrect) {
            if (currentQuestionsIndex < 14) {
                setTimeout(nextQuestion, initialValues.answerCheckAndMarkDelay)
            } else {
                gameWon()
            }
        } else {
            gameOver()
        }
    }

    const nextQuestion = () => {
        setIsAnswerDisabled(false)
        store.dispatch(toggleShowAnswer())
        store.dispatch(setNextQuestion())
    }

    const gameOver = () => {
        store.dispatch(setGameOver())
        setIsAnswerDisabled(false)
    }

    const gameWon = () => {
        store.dispatch(setGameWon())
        setIsAnswerDisabled(false)
    }

    return (
        <li className={`${
            isPending ? 'single-answer single-answer--checking' : 'single-answer'} ${
            showAnswer && isCorrect ? 'single-answer--correct' : ''} ${
            isChosen && showAnswer && !isCorrect ? 'single-answer--incorrect' : '' } ${
            disabledAnswers && disabledAnswers[0].answer === answerContent || disabledAnswers && disabledAnswers[1].answer === answerContent
        ? 'single-answer--disabled'
        : ''
        }`}
        >
            <div className='single-answer__squares single-answer__squares--first'/>
            <div className='single-answer__squares single-answer__squares--second'/>
            <button
                onClick={checkAnswer}
                className='single-answer__onclick'
                disabled={isAnswerDisabled
                    ? isAnswerDisabled
                    : (disabledAnswers && disabledAnswers[0].answer === answerContent || disabledAnswers && disabledAnswers[1].answer === answerContent)}
            >
                <div className='single-answer__onclick-squares single-answer__onclick-squares--first'/>
                <div className='single-answer__onclick-squares single-answer__onclick-squares--second'/>
                </button>
            <div className='single-answer__line'/>
            <span className='single-answer__content'>
                <div className='single-answer__dot-letter-box'>
                    <div className='single-answer__dot'/>
                    <div className='single-answer__letter'>{answersLetters[index].letter}:</div>
                </div>
                <p>{answerContent}</p>
                </span>
        </li>
    )
}

export default SingleAnswer