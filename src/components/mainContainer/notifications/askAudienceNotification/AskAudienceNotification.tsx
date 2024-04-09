import React, {useState, useEffect} from "react";
import './AskAudienceNotification.scss'
import {useSelector} from "react-redux";
import {getIsAudienceAsked} from "../../../../store/selectors/lifebuoys/lifebuoys";
import {
    getCurrentAnswers,
    getCurrentCorrectAnswer
} from "../../../../store/selectors/questionsAndAnswers/questionsAndAnswers";
import {answersLetters} from "../../../../data/questionsAndAnswers/questionsAndAnswers";

type percentObjProps = {
    percent: number
}

const AskAudienceNotification = () => {

    const isAudienceAsked = useSelector(getIsAudienceAsked)
    const correctAnswer = useSelector(getCurrentCorrectAnswer)
    const currentAnswers = useSelector(getCurrentAnswers)
    const [audienceAnswers, setAudienceAnswers] = useState<any>()

    useEffect(() => {

        if (isAudienceAsked) {

        currentAnswers.map((el, index) => el.letter = answersLetters[index].letter)

        let allVotes: number[] = [];
        let result: number = 0;

        const sumPercents = (array: number[]) => {
            result = array[0] + array[1] + array[2] + array[3]
        }

        while (allVotes.length !== 4) {
            const random = Math.round(Math.random() * 100)
            allVotes.push(random)

            if (allVotes.length === 4) {
                sumPercents(allVotes)

                if (result !== 100) {
                    allVotes = []
                    result = 0
                }
            }
        }
        allVotes.sort((a: number,b: number) => a - b )
        allVotes = allVotes.map((num: number) => num/10)

        let percentsObj = [
            {percent: 0},
            {percent: 0},
            {percent: 0},
            {percent: 0},
        ]
        percentsObj.map((elem:percentObjProps, index:number) => {
            return elem.percent = allVotes[index]
        })

        const votesObjCorrectLetterIndex = answersLetters.findIndex(el => el.letter === correctAnswer?.letter)
        const incorrectPercent = percentsObj[votesObjCorrectLetterIndex].percent
        percentsObj[votesObjCorrectLetterIndex].percent = percentsObj[3].percent
        percentsObj[3].percent = incorrectPercent

        const votesObjWithPercents = answersLetters.map((el, index) => ({
            ...el,
            percent: percentsObj[index].percent,
        }))

        const mapVotesObjWithPercents = votesObjWithPercents.map(el => {
            return (
                <li key={el.letter} className='ask-the-audience-notification__answer-chance' style={{height: el.percent + 'rem'}}>
                    <span>{el.letter}</span>
                </li>
            )
        })
        setAudienceAnswers(mapVotesObjWithPercents)

        }

    }, [isAudienceAsked])

    return (
        <div className={`${isAudienceAsked ? 'ask-the-audience-notification--shown' : 'hidden'}`}>
            <div className='ask-the-audience-notification--inner'>
                <div className='ask-the-audience-notification__percent'>
                <div/>
                <div/>
                <div/>
                <span>
                0%
                </span>
                <span>
                100%
                </span>
            </div>
                <ul className='ask-the-audience-notification__answers'>
                    {audienceAnswers}
                </ul>
            </div>
        </div>
    )
}

export default AskAudienceNotification