import React from "react";

import style from './answerItem.module.scss'

export default props =>
   {
        const cls = [style.AnswerItem]
        if( props.answerState ) {
            cls.push(style[props.answerState])
        }


    return  (
    <li
        className={cls.join(' ')}
        onClick={() => props.clickNameUser(props.id, props.text)}  >
        <img src={props.icon}  alt={props.text + `photo` }   className={style.icon} />
        &nbsp;
        {props.text}
    </li>
)
}
