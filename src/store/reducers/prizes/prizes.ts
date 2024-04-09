import { initialValues } from "../../../data/initialValues/initialValues";

export type Prize = { number: number }

export type AllPrizes = {
    prizes: {number: number}[]
}

const prizes = (state = initialValues.prizes, action: {type: string}) => {
    switch (action.type) {
        default:
            return state
    }
}

export default prizes