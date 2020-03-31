import React from "react";
import AnswersList from "./AnswersList/AnswersList";

import style from '../ActiveQuiz/activeQuiz.module.scss'

const ActiveQuiz = props => {
    return (
        <div className={style.ActiveQuiz}>
            <p className={style.Question}>
                <span>
                    <strong>{props.activeQuestion }.</strong>
                    &nbsp; {props.answers.question}
                </span>
                <small> {props.activeQuestion } and {props.questionQuantity}</small>
            </p>
            <AnswersList  {...props.answers} clickUserName={props.clickNameUser}   answerState = {props.answerState} />

        </div> 
    )
}

export default ActiveQuiz;