import React, {Component} from "react";
import Input from "../../components/UI/Input/Input";
import {createControl, validate, validateForm} from "../../form/formFramework";
import Button from "../../components/UI/Button/Button";
import Select from "../../components/UI/Select/Select";
import axios from '../../axios/axios-quiz'

import style from './quizCreator.module.scss'


function createOptionControl(number) {
    return createControl({
            label: `Option ${number} `,
            id: number,
            errorMessage: "Տողը լրացնելը պարտադիր է"
        },
        {required: true})
}

function createFormControl() {
    return {
        question: createControl(
            {
                label: "Add Question",
                errorMessage: "Տողը լրացնելը պարտադիր է"
            },
            {required: true}),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4)
    }

}

 class QuizCreator extends Component {

    state = {
        quiz: [],
        rightAnswerId: 1,
        isFormValid: false,
        formControls: createFormControl()
    }

    changeHandler = (value, controlName) => {
        const formControl = {...this.state.formControls}
        const control = {...formControl[controlName]}
        control.touched = true
        control.value = value
        control.valid = validate(control.value, control.validation)
        formControl[controlName] = control
        this.setState({
            formControls: formControl,
            isFormValid: validateForm(control)
        })
    }

    renderInputs = () => {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
                <React.Fragment key={index}>
                    <Input
                        value={control.value}
                        label={control.label}
                        type={control.type}
                        onerror={control.errorMessage}
                        valid={control.valid}
                        touched={control.touched}
                        onchange={event => this.changeHandler(event.target.value, controlName)}
                    />
                    {index === 0 ? <hr/> : null}
                </React.Fragment>
            )
        })
    }

    selectChangeHandler = event => {
        this.setState({rightAnswerId: +event.target.value})
    }

    addQuestionHandler = event => {
        event.preventDefault()
        const quiz = [...this.state.quiz]
        const index = quiz.length + 1
        const {question, option1, option2, option3, option4} = this.state.formControls

        const questionItem = {
            question: question.value,
            id: index,
            rightAnswerId: this.state.rightAnswerId,
            answers: [
                {text: option1.value, id: option1.id},
                {text: option2.value, id: option2.id},
                {text: option3.value, id: option3.id},
                {text: option4.value, id: option4.id},
            ]
        }
        console.log(questionItem)
        quiz.push(questionItem)
        this.setState({
            quiz,
            rightAnswerId: 1,
            isFormValid: false,
            formControls: createFormControl()
        })
    }

    createQuizHandler = async event => {
        event.preventDefault()
        try {
            await axios.post('/quizzess.json', this.state.quiz)
            this.setState({
                quiz:[],
                rightAnswerId: 1,
                isFormValid: false,
                formControls: createFormControl()
            })
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <div className={style.QuizCreator}>
                <form className={style.Form}>
                    {this.renderInputs()}
                    <Select
                        label={'Choose the right answer'}
                        value={this.state.rightAnswerId}
                        onchange={this.selectChangeHandler}
                        options={[
                            {text: 1, value: 1},
                            {text: 2, value: 2},
                            {text: 3, value: 3},
                            {text: 4, value: 4},
                        ]}
                    />
                    <Button
                        type={'primary'}
                        disabled={!this.state.isFormValid}
                        onclick={this.addQuestionHandler}
                    >
                        Submit </Button>
                    <Button type={'secondary'}
                            disabled={this.state.quiz.length === 0}
                            onclick={this.createQuizHandler}
                    >
                        Create </Button>
                </form>
            </div>
        );
    }


}

export default QuizCreator
