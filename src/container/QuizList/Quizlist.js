import React, {Component} from "react"
import {NavLink} from "react-router-dom";
import Loader from "../../components/UI/Loader/Loader";
import axios from '../../axios/axios-quiz'

import style from './quizList.module.scss'

class QuizList extends Component {
    state = {
        quiz: [],
        loading: true,
    }

    async componentDidMount() {
        try {
            const response = await axios.get('/quizzess.json')
            const quiz = []
            Object.keys(response.data).forEach((el, index) => {
                quiz.push({
                    id: el,
                    name: `Test ${index + 1}`
                })
            })
            this.setState({
                quiz,
                loading: false,
            })
        } catch (e) {
            console.log(e)
        }
    }


    render() {
        return (
            <div className={style.QuizList}>
                <ul>
                    {
                        this.state.loading ? <Loader/>
                            :
                            this.state.quiz.map(quiz => {
                                return <li key={quiz.id}>
                                    <NavLink to={'/quiz/' + quiz.id }>
                                        {quiz.name}
                                    </NavLink>
                                </li>

                            })
                    }
                </ul>
            </div>
        )
    }
}

export default QuizList

