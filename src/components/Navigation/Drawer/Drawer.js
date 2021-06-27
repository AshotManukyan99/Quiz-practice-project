import React, {Component} from "react"
import BackDrop from "../../UI/BackDrop/BackDrop"
import {NavLink} from "react-router-dom"

import style from './drawer.module.scss'


class Drawer extends Component {
    state = {
        link: [
            {
                id: 1,
                name: 'Quiz',
                nameTo: "/quiz"
            },
            {
                id: 2,
                name: 'Auth',
                nameTo: "/auth"
            },
            {
                id: 3,
                name: 'Quiz-Creator',
                nameTo: "/quiz-creator"
            },
            {
                id: 4,
                name: 'QuizList',
                nameTo: "/quiz-list"
            }
        ]
    }


    render() {
        return (
            <div>
                <nav className={this.props.isOpen ? style.Drawer : style.DrawerClose}>
                    <ul style={{display: "flex", flexDirection: 'column'}}>
                        {
                            this.state.link.map((li, index) => {
                                return <NavLink
                                    key={index}
                                    to={li.nameTo}
                                    onClick={this.props.onClose}>
                                    {li.name}
                                </NavLink>
                            })
                        }
                    </ul>
                </nav>

                {this.props.isOpen ? <BackDrop onclick={this.props.onClose}/> : null}
            </div>
        )
    }

}


export default Drawer


