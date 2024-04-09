import React, {useEffect, useState} from "react";
import './Answers-container.scss'
import SingleAnswer from "./singleAnswer/SingleAnswer";
import { useSelector } from "react-redux";
import {getCurrentAnswers} from "../../../store/selectors/questionsAndAnswers/questionsAndAnswers";
import {Answer} from "../../../store/reducers/questionsAndAnswers/questionsAndAnswers";
import {useShuffleArray} from "../../../hooks/useShuffleArray";
import {getIsFiftyFiftyUsed} from "../../../store/selectors/lifebuoys/lifebuoys";

const AnswersContainer = () => {

    const [disabledAnswers, setDisabledAnswers] = useState<Answer[]>()
    const [isAnswerDisabled, setIsAnswerDisabled] = useState(false)

    const currentAnswers =useSelector(getCurrentAnswers)
    const answers = useSelector(getCurrentAnswers)
    const isFiftyFiftyUsed = useSelector(getIsFiftyFiftyUsed)

    useEffect(() => {
        if (isFiftyFiftyUsed) {
            const newDisabledAnswers = currentAnswers.filter((el: Answer) => !el.isCorrect).sort(useShuffleArray)
            newDisabledAnswers.length = 2
            setDisabledAnswers(newDisabledAnswers)
        }
    }, [isFiftyFiftyUsed])

    return (
        <ul className='answers-container'>
            <div className='answers-container__line'/>
            <div className='answers-container__line'/>
                {answers.map((el: Answer, index) => {
                    return <SingleAnswer
                        key={el.answer}
                        disabledAnswers={disabledAnswers}
                        isCorrect={el.isCorrect}
                        answerContent={el.answer}
                        isAnswerDisabled={isAnswerDisabled}
                        setIsAnswerDisabled={setIsAnswerDisabled}
                        index={index}
                    />
                })}
        </ul>
    )
}

export default AnswersContainer