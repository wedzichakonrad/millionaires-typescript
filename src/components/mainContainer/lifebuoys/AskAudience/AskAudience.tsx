import React from "react";
import avatar from "../../../../assets/avatar.png";
import './Ask-audience.scss'
import {useSelector} from "react-redux";
import {getIsAskAudienceDisabled} from "../../../../store/selectors/lifebuoys/lifebuoys";
import store from "../../../../store/store";
import {doAskAudience, doDisableAskAudience} from "../../../../store/actions/lifebuoys/askAudience";

const AskAudience = () => {

    const isAskAudienceDisabled = useSelector(getIsAskAudienceDisabled)

    const askAudienceHandler = () => {
        store.dispatch(doAskAudience())
        store.dispatch(doDisableAskAudience())
    }

    return (
        <div className={`${!isAskAudienceDisabled ? 'ask-audience' : 'ask-audience disabled'}`}>
            <button disabled={isAskAudienceDisabled} onClick={askAudienceHandler} className='ask-audience__button'/>
            <img className="ask-audience__img ask-audience__img--first" src={avatar} alt="Ask the audience"/>
            <img className="ask-audience__img ask-audience__img--second" src={avatar} alt="Ask the audience"/>
            <img className="ask-audience__img ask-audience__img--third" src={avatar} alt="Ask the audience"/>
        </div>
    )
}

export default AskAudience