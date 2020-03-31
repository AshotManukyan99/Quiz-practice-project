import React from "react";
import AnswerItem from "./AnswerItem/AnswerItem";


import style from './answersList.module.scss'

const AnswersList = props => {
    return (<ul className={style.AnswersList}>
            {props.answers.map((item, index) => {
                return <AnswerItem key={index}
                                   {...item}
                                   clickNameUser={props.clickUserName}
                                   answerState={props.answerState  ? props.answerState[item.id]  : null  } />
            })}

        </ul>
    )
}


export default AnswersList;