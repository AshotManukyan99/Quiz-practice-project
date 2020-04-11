import React from "react";

import style from './select.module.scss'

const Select = ({label, value, onchange, options}) => {
    const htmlFor = `${label}-${Math.random()}`
    return (
        <div className={style.Select}>
            <label htmlFor={htmlFor}>{label}</label>
            <select id={htmlFor} value={value} onChange={onchange}>
                {
                    options.map((option, index) => {
                        return (
                            <option key={index} value={option.value}>
                                {option.text}
                            </option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default Select;