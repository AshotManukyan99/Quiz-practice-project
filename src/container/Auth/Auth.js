import React, {Component} from "react";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import is from "is_js"


import style from './auth.module.scss'

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formControls: {
                email: {
                    value: '',
                    type: 'email',
                    label: 'Email',
                    errorMessage: 'Check your Email correct',
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        email: true,
                    }

                },
                password: {
                    value: '',
                    type: 'password',
                    label: 'Password',
                    errorMessage: 'Password must be at least 6 characters long',
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        minLength: 6,
                    }
                },
            }
        }
    }


    loginHandler = () => {
        const data = {
            email: this.state.formControls.value,
            password: this.state.formControls.value
        }

    }

    registerHandler = () => {
        const data = {
            email: this.state.formControls.value,
            password: this.state.formControls.value
        }

    }
    validateControl = (value, validation) => {
        if (!validation) {
            return true
        }
        let isValid = true

        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        }
        if (validation.email) {
            isValid = is.email(value) && isValid
        }
        if (validation.minLength) {
            isValid = value.length > validation.minLength && isValid
        }
        return isValid

    }

    submitHandler = (event, controlName) => {
        event.preventDefault()
        const control = this.state.formControls[controlName]
        control.value = event.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)
        this.setState({control})
    }

    renderInputs = () => {
        return Object.keys(this.state.formControls).map((item, index) => {
            let formControlItem = this.state.formControls[item]
            return <Input
                key={index}
                label={formControlItem.label}
                type={formControlItem.type}
                onerror={formControlItem.errorMessage}
                valid={formControlItem.valid}
                touched={formControlItem.touched}
                onchange={(event) => this.submitHandler(event, formControlItem.type)}
            />
        })
    }

    render() {
        return (
            <div className={style.Auth}>
                <div>
                    <h1> Sign in </h1>
                    <form className={style.AuthForm} action="#">
                        {this.renderInputs()}
                        <Button type={"primary"} onclick={this.loginHandler}>
                            Log In
                        </Button>
                        <Button type={"primary"} onclick={this.registerHandler}>
                            Sign Up
                        </Button>
                    </form>
                </div>
            </div>
        )
    }

}

export default Auth