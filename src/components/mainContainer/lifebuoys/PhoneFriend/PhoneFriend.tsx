import React from "react";
import telephone from "../../../../assets/telephone.png";
import './Phone-friend.scss'
import {useSelector} from "react-redux";
import {getIsPhoneFriendDisabled} from "../../../../store/selectors/lifebuoys/lifebuoys";
import {doDisablePhoneFriend, doPhoneFriend} from "../../../../store/actions/lifebuoys/phoneFriend";
import store from "../../../../store/store";

const PhoneFriend = () => {

    const isPhoneFriendDisabled = useSelector(getIsPhoneFriendDisabled)

    const phoneFriendHandler = () => {
        store.dispatch(doPhoneFriend())
        store.dispatch(doDisablePhoneFriend())
    }

    return (
        <div className={`${!isPhoneFriendDisabled ? 'phone-friend' : 'phone-friend disabled'}`}>
            <button disabled={isPhoneFriendDisabled} onClick={phoneFriendHandler} className='phone-friend__button' />
            <img src={telephone} alt="Phone your friend"/>
        </div>
    )
}

export default PhoneFriend