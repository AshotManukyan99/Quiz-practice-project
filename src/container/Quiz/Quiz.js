import React, {Component} from "react";
import ActiveQuiz from "./ActiveQuiz/AcriveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";
// import Loader from "../../components/UI/Loader/Loader";
import {withRouter} from 'react-router-dom'
import axios from '../../axios/axios-quiz'

import style from '../Quiz/quiz.module.scss'
import Loader from "../../components/UI/Loader/Loader";


class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: {},
            isFinished: false,
            activeQuestion: 0,
            answerState: null,
            loading: true,
            quiz: [
                {
                    id: 1,
                    question: 'What is the name of the great?',
                    rightAnswerId: 2,
                    answers: [
                        {
                            id: 1, text: "Vaspur",
                        },
                        {
                            id: 2, text: "Ashot",

                        },
                        {
                            id: 3, text: "Joroj",
                        },
                        {
                            id: 4, text: "Gevik",
                        },
                    ]

                },
                {
                    id: 2,
                    question: 'Vorn e Fransiayi?',
                    rightAnswerId: 1,
                    answers: [
                        {
                            id: 1,
                            text: "Mayraqaxaqy",
                        },
                        {
                            id: 2,
                            text: "Paris",
                        },
                        {
                            id: 3,
                            text: "Zidane",
                        },
                        {
                            id: 4,
                            text: "Europa",
                        },
                    ]

                },
                {
                    id: 3,
                    question: 'Best football club in the World?',
                    rightAnswerId: 3,
                    answers: [
                        {
                            id: 1,
                            text: "Barcelona",
                        },
                        {
                            id: 2,
                            text: "Liverpool",
                        },
                        {
                            id: 3,
                            text: "Real Madrid",
                        },
                        {
                            id: 4,
                            text: "Atletico Madrid",
                        },
                    ]

                },
                {
                    id: 4,
                    question: 'Amenaujex Exon?',
                    rightAnswerId: 2,
                    answers: [
                        {
                            id: 1,
                            text: "Pte",
                        },
                        {
                            id: 2,
                            text: "Qerob Arshak",
                        },
                        {
                            id: 3,
                            text: "Mamikon",
                        },
                        {
                            id: 4,
                            text: "Bash",
                        },
                    ]

                },
                {
                    id: 5,
                    question: 'Best porno acter in the world?',
                    rightAnswerId: 3,
                    answers: [
                        {
                            id: 1,
                            text: "Sasha Gray",
                        },
                        {
                            id: 2,
                            text: "Liza Ann",
                        },
                        {
                            id: 3,
                            text: "Jessa Rhodes",
                        },
                        {
                            id: 4,
                            text: "Lena Paul",
                        },
                    ]

                }
            ],
        }
    }

    getState = () => {
        console.log(this.state)
    }

    clickNameHandler = (userId) => {
        const result = this.state.result
        const currentQuestion = this.state.quiz[this.state.activeQuestion]
        if (currentQuestion.rightAnswerId === userId) {
            if (!result[currentQuestion.id]) {
                result[currentQuestion.id] = 'succes'
            }
            this.setState({answerState: {[userId]: 'succes'}, result})
            setTimeout(() => this.setState(
                {activeQuestion: this.state.activeQuestion + 1, answerState: null}), 1000)
            this.stopQuestion()
        } else {
            result[currentQuestion.id] = 'error'
            this.setState({answerState: {[userId]: 'error'}, result})
        }
    }
    clickRetry = () => {
        this.setState({
            result: {},
            isFinished: false,
            activeQuestion: 0,
            answerState: null,
        })
    }

    stopQuestion() {
        this.state.activeQuestion + 1 === this.state.quiz.length &&
        this.setState({activeQuestion: 0, isFinished: true,})
    }

   async componentDidMount() {
        try {
            const response = await axios.get(`/quizzess/${this.props.match.params.id}.json`)
            if(response.data){
                const quiz = response.data
                this.setState({
                    quiz,
                    loading:false
                })
            }
                this.setState({loading:false})
        }catch (e) {
            console.log(e)
        }
   }


    render() {
        return (
            <div className={style.Quiz}>
                <div className={style.QuizWrapper}>
                    <h1>Answer all Question</h1>
                    {
                        this.state.loading ? <Loader/>
                            :
                            this.state.isFinished
                                ?
                                <FinishedQuiz results={this.state.result}
                                              quiz={this.state.quiz}
                                              onRetry={this.clickRetry}
                                > Finished ! </FinishedQuiz>
                                :
                                <ActiveQuiz
                                    answers={this.state.quiz[this.state.activeQuestion]}
                                    clickNameUser={this.clickNameHandler}
                                    questionQuantity={this.state.quiz.length}
                                    activeQuestion={this.state.activeQuestion + 1}
                                    answerState={this.state.answerState}

                                />
                    }
                </div>

                {/*<div style={{textAlign: 'center'}}>*/}
                {/*    <Button onclick={this.getState} type={'primary'}> Get State Console </Button>*/}
                {/*</div>*/}
            </div>

        );
    }

}


export default withRouter(Quiz);