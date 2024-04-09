import React from "react";
import './Lifebuoys.scss'
import AskAudience from "./AskAudience/AskAudience";
import FiftyFifty from "./FiftyFifty/FiftyFifty";
import PhoneFriend from "./PhoneFriend/PhoneFriend";

const Lifebuoys = () => {
    return (
        <div className="lifebuoys">
            <AskAudience/>
            <FiftyFifty/>
            <PhoneFriend/>
        </div>
    )
}

export default Lifebuoys