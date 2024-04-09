import React from "react";
import './Logo.scss'
import logo from '../../../assets/logo.png'

const Logo = () => {
    return (
        <div className="logo">
            <img className="logo__img" src={logo} alt="Logo milionerzy"/>
            <div className="logo__animation-box"/>
        </div>
    )
}

export default Logo