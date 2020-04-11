import React from "react";

import style from './input.module.scss'


const Input = ({type, placeholder, label, value, onchange, onerror, valid, touched}) => {
    let html = `${type} + ${Math.random()} `
    let styleName;
    switch (type) {
        case 'text':
            styleName = style.Input;
            break;
        case 'number':
            styleName = style.InputNumber
            break;
        default:
            styleName = style.Input
    }
    return (
        <div className={styleName}>
            <label htmlFor={html}>{label}</label>
            <input
                type={type}
                id={html}
                placeholder={placeholder ? placeholder : null}
                value={value}
                onChange={onchange}
            />
            <span className={style.InputError}>
                {touched && valid ? null : touched ? onerror : null}
            </span>

        </div>
    )
}

export default Input;