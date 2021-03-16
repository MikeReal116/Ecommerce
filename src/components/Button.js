import React from 'react'
import "./Button.css"

export const Button = ({buttonStyle, children, onClick, buttonColor}) => {

    const STYLES = ["primary", "outline"];
    const COLORS = ["green", "gray"];

    const checkButtonStyle = STYLES.includes(buttonStyle)?buttonStyle:STYLES[0];
    const checkButtonColor = STYLES.includes(buttonColor)?buttonColor:COLORS[0];
    return (
        <button onClick={onClick} className={`btn ${checkButtonStyle} ${checkButtonColor}`}>
            {children}
        </button>
    )
}

