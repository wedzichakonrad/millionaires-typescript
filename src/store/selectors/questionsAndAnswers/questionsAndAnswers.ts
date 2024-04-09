import {QuestionsAndAnswers} from "../../reducers/questionsAndAnswers/questionsAndAnswers";

export const getCurrentCorrectAnswer = (state: QuestionsAndAnswers) => {
    return state.questionsAndAnswers.data[state.questionsAndAnswers.currentQuestionIndex].answers.find(answer => answer.isCorrect)
}

export const getCurrentAnswers = (state: QuestionsAndAnswers) => {
    return state.questionsAndAnswers.data[state.questionsAndAnswers.currentQuestionIndex].answers
}

export const getCurrentQuestion = (state: QuestionsAndAnswers) => {
    return state.questionsAndAnswers.data[state.questionsAndAnswers.currentQuestionIndex].question
}

export const getCurrentQuestionIndex = (state: QuestionsAndAnswers) => {
    return state.questionsAndAnswers.currentQuestionIndex
}