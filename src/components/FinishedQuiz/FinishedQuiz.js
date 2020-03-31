import React from "react";

import style from '../FinishedQuiz/finishedQuiz.module.scss'
import Button from "../UI/Button/Button";


const FinishedQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'succes') {
            total++
        }
        return total
    }, 0)
    return (
        <div className={style.FinishedQuiz}>
            <ul>
                {
                    props.quiz.map((quizItem, index) => {
                        return <li key={index}>
                            <strong> {index + 1} </strong> . &nbsp;
                            {quizItem.question}
                            <i className={props.results[quizItem.id] === 'succes' ?
                                `fas fa-check  + ${style.iconSucces} `
                                : `fas fa-times + ${style.iconError} `}/>
                        </li>
                    })
                }


            </ul>
            <p> {successCount} and {props.quiz.length} </p>
            <div>
                <Button onclick={props.onRetry} type={"secondary" }> Retry </Button>
            </div>

        </div>
    )
}


export default FinishedQuiz;