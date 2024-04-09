import React from "react";
import './Prizes.scss'
import SinglePrize from "./SinglePrize/SinglePrize";
import {useSelector} from "react-redux";
import {getPrizes} from "../../../store/selectors/prizes/prizes";
import {Prize} from "../../../store/reducers/prizes/prizes";

const Prizes = () => {

    const prizes = useSelector(getPrizes)

    return (
        <ol className='prizes'>
            {prizes.map((el: Prize,index: number) => {
                return <SinglePrize
                    key={el.number}
                    prizeAmount={el.number}
                    index={index}/>
            })}
        </ol>
    )
}

export default Prizes