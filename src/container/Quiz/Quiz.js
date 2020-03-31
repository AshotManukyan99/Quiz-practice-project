import React, {Component} from "react";
import ActiveQuiz from "./ActiveQuiz/AcriveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

import style from '../Quiz/quiz.module.scss'
// import Button from "../../components/UI/Button/Button";

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: {},
            isFinished: false,
            activeQuestion: 0,
            answerState: null,
            quiz: [
                {
                    id: 1,
                    question: 'What is the name of the great?',
                    rightAnswer: 2,
                    answers: [
                        {
                            id: 1, text: "Vaspur",
                            icon:
                                "https://media1.tenor.com/images/e9074d66c880f75693f6d6c324b70086/" +
                                "tenor.gif?itemid=7204546"
                        },
                        {
                            id: 2, text: "Ashot",
                            icon: "https://i.pinimg.com/originals/74/" +
                                "68/4f/74684f3e3ab75ca62a5755b890d67b46.jpg"
                        },
                        {
                            id: 3, text: "Joroj",
                            icon: "https://scontent.fevn1-4.fna.fbcdn.net/v/t1.0-9/89722094_1833532900115165_9212125574795886592_n.jpg?_nc_cat=102&_nc_sid=85a577&_nc_ohc=oI2r4PIDx2MAX8_AG7Q&_nc_ht=scontent.fevn1-4.fna&oh=f6399dd1603cac76c8ca1a88142ffa85&oe=5EA34DCE"
                        },
                        {
                            id: 4, text: "Gevik",
                            icon: "https://scontent.fevn1-4.fna.fbcdn.net/v/t1.0-9/12187696" +
                                "_969964736408506_4481288519201298322_n.jpg?" +
                                "_nc_cat=100&_nc_sid=85a577&_nc_ohc=0fGGolsujGQAX9L5aMN&_nc_ht" +
                                "=scontent.fevn1-4.fna&oh=389c2d8f125267314b587ea77bdf9232&oe=5EA5B75A"
                        },
                    ]

                },
                {
                    id: 2,
                    question: 'Vorn e Fransiayi?',
                    rightAnswer: 1,
                    answers: [
                        {
                            id: 1,
                            text: "Mayraqaxaqy",
                            icon: "https://magazine.startus.cc/wp-content/uploads/2016/07/Yerevan.jpg"
                        },
                        {
                            id: 2,
                            text: "Paris",
                            icon: "https://media.cntraveler.com/photos/5d8cf7d5db6acf000833e6cc/4:3/w_420,c_limit/Eiffel-Tower_GettyImages-1060266626.jpg"
                        },
                        {
                            id: 3,
                            text: "Zidane",
                            icon: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Zinedine_Zidane_by_Tasnim_03.jpg"
                        },
                        {
                            id: 4,
                            text: "Europa",
                            icon: "https://enrd.ec.europa.eu/sites/enrd/files/map-for-enrd-homepage-withoutukflag.png"
                        },
                    ]

                },
                {
                    id: 3,
                    question: 'Best football club in the World?',
                    rightAnswer: 3,
                    answers: [
                        {
                            id: 1,
                            text: "Barcelona",
                            icon: "https://upload.wikimedia.org/wikipedia/ru/thumb/2/24/FC_Barcelona.svg/1200px-FC_Barcelona.svg.png"
                        },
                        {
                            id: 2,
                            text: "Liverpool",
                            icon: "https://upload.wikimedia.org/wikipedia/ru/thumb/0/0a/FC_Liverpool.svg/1200px-FC_Liverpool.svg.png"
                        },
                        {
                            id: 3,
                            text: "Real Madrid",
                            icon: "https://statistics-stat-logos.trbna.com/champions_league/2018-19/real_madrid.png?height=28&width=28"
                        },
                        {
                            id: 4,
                            text: "Atletico Madrid",
                            icon: "https://upload.wikimedia.org/wikipedia/ru/thumb/c/c1/Atletico_Madrid_logo.svg/1200px-Atletico_Madrid_logo.svg.png"
                        },
                    ]

                },
                {
                    id: 4,
                    question: 'Amenaujex Exon?',
                    rightAnswer: 2,
                    answers: [
                        {
                            id: 1,
                            text: "Pte",
                            icon: "https://scontent.fevn1-4.fna.fbcdn.net/v/t1.0-9/73255368_3268307893243530_7569102560313737216_o.jpg?_nc_cat=102&_nc_sid=85a577&_nc_ohc=oECu3AM9uY0AX9ONfyT&_nc_ht=scontent.fevn1-4.fna&oh=73f62c00e608b4cdb2ddc24045b78963&oe=5EA24066"
                        },
                        {
                            id: 2,
                            text: "Qerob Arshak",
                            icon: "https://scontent.fevn1-4.fna.fbcdn.net/v/t1.0-9/72238561_2304986249628944_9181047264456474624_n.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=R_0KT864WnEAX_U4452&_nc_ht=scontent.fevn1-4.fna&oh=2f603dc9ecdd6cce1ec71d8d0020f706&oe=5EA5ADCB"
                        },
                        {
                            id: 3,
                            text: "Mamikon",
                            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Vardan_Mamikonyan.jpg/260px-Vardan_Mamikonyan.jpg"
                        },
                        {
                            id: 4,
                            text: "Bash",
                            icon: "https://scontent.fevn1-4.fna.fbcdn.net/v/t1.0-9/22852254_124344024909034_1663685738588103138_n.jpg?_nc_cat=104&_nc_sid=110474&_nc_ohc=IiqW-nxtGqIAX_XfADL&_nc_ht=scontent.fevn1-4.fna&oh=fb43ee052919d7e06a24bf3729f2763c&oe=5EA3B9D7"
                        },
                    ]

                },
                {
                    id: 5,
                    question: 'Best porno acter in the world?',
                    rightAnswer: 3,
                    answers: [
                        {
                            id: 1,
                            text: "Sasha Gray",
                            icon: "https://ushki-ruchki.ru/uploads/images/s/a/s/sasha_gray_sasha_grey.jpg"
                        },
                        {
                            id: 2,
                            text: "Liza Ann",
                            icon: "https://ae01.alicdn.com/kf/HTB1aYpcazvuK1Rjy0Faq6x2aVXaN/-.jpg_640x640q70.jpg"
                        },
                        {
                            id: 3,
                            text: "Jessa Rhodes",
                            icon: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Jessa_Rhodes_2014_%28cropped%29.jpg"
                        },
                        {
                            id: 4,
                            text: "Lena Paul",
                            icon: "https://pbs.twimg.com/profile_images/916815581663207424/eUEYk1ni_400x400.jpg"
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
        if (currentQuestion.rightAnswer === userId) {
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


    render() {
        return (
            <div className={style.Quiz}>
                <div className={style.QuizWrapper}>
                    <h1>Answer all Question</h1>
                    {
                        this.state.isFinished ?
                            <FinishedQuiz results={this.state.result}
                                          quiz={this.state.quiz}
                                          onRetry={this.clickRetry}
                            > Finished ! </FinishedQuiz> :
                            <ActiveQuiz answers={this.state.quiz[this.state.activeQuestion]}
                                        question={this.state.question}
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


export default Quiz;