import React from "react";
import './Question.scss'
import { useSelector } from "react-redux";
import { getCurrentQuestion } from "../../../store/selectors/questionsAndAnswers/questionsAndAnswers";

const Question = () => {

    const question = useSelector(getCurrentQuestion)

    return (
        <div className='question'>
            <div className='question__squares'/>
            <div className='question__squares'/>
            <div className="question__line"/>
            <div className='question__content'>
                <p>{question}</p>
            </div>
        </div>
    )
}

export default Question