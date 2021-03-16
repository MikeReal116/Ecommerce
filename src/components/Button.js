import React from 'react'
import "./Button.css"

export const Button = ({buttonStyle, children, onClick, buttonColor}) => {

    const STYLES = ["primary", "outline", "cart"];
    const COLORS = ["green", "gray","green-2"];

    const checkButtonStyle = STYLES.includes(buttonStyle)?buttonStyle:STYLES[0];
    const checkButtonColor = COLORS.includes(buttonColor)?buttonColor:COLORS[0];
    return (
        <button onClick={onClick} className={`btn ${checkButtonStyle} ${checkButtonColor}`}>
            {children}
        </button>
    )
}

