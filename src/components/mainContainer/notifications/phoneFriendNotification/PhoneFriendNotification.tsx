import React, {useEffect, useState} from "react";
import './PhoneFriendNotification.scss'
import {useSelector} from "react-redux";
import {getIsFriendCalled} from "../../../../store/selectors/lifebuoys/lifebuoys";
import {getCurrentAnswers} from "../../../../store/selectors/questionsAndAnswers/questionsAndAnswers";
import {answersLetters} from "../../../../data/questionsAndAnswers/questionsAndAnswers";
import {useShuffleArray} from "../../../../hooks/useShuffleArray";

const PhoneFriendNotification = () => {

    const [friendHint, setFriendHint] = useState<string>()
    const isFriendCalled = useSelector(getIsFriendCalled)
    const currentAnswers = useSelector(getCurrentAnswers)

    useEffect(() => {
        if (isFriendCalled) {

            currentAnswers.map((el, index) => el.letter = answersLetters[index].letter)
            const correctAnswerWithLetter = currentAnswers.find(answer => answer.isCorrect)
            const filteredAnswers = currentAnswers.filter(answer => answer.letter !== correctAnswerWithLetter?.letter)
            filteredAnswers.sort(useShuffleArray)
            filteredAnswers.length = 1

            const hintLetters = [
                correctAnswerWithLetter?.letter,
                filteredAnswers[0].letter
            ]
            hintLetters.sort(useShuffleArray)

            const hints = [
                `I think it can be ${hintLetters[0]} but it also can be ${hintLetters[1]}`,
                `I am sure that it is ${correctAnswerWithLetter?.letter} I saw it in Galileo!`
            ]
            hints.sort(useShuffleArray)
            setFriendHint(hints[0])
        }
    }, [isFriendCalled])

    return (
        <div
            className={`${isFriendCalled ? 'phone-Friend-Notification--shown' : 'hidden'}`}
        >
            <div className='phone-Friend-Notification--inner'>
                <p>{friendHint}</p>
            </div>
        </div>
    )
}

export default PhoneFriendNotification