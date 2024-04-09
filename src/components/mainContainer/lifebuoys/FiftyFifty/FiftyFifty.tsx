import React from "react";
import './Fifty-fifty.scss'
import store from "../../../../store/store";
import {doFiftyFifty} from "../../../../store/actions/lifebuoys/fiftyFifty";
import {useSelector} from "react-redux";
import {getIsFiftyFiftyUsed} from "../../../../store/selectors/lifebuoys/lifebuoys";

const FiftyFifty = () => {

    const isFiftyFiftyUsed = useSelector(getIsFiftyFiftyUsed)
    const fiftyFiftyHandler = () => {
        store.dispatch(doFiftyFifty())
    }

    return (
        <div className={`${!isFiftyFiftyUsed ? 'fifty-fifty' : 'fifty-fifty disabled'}`}>
            <button disabled={isFiftyFiftyUsed} onClick={fiftyFiftyHandler} className="fifty-fifty__button"/>
            <p>50:50</p>
        </div>
    )
}

export default FiftyFifty