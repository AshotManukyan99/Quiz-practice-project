import React, {Component} from "react";
import BackDrop from "../../UI/BackDrop/BackDrop";
import {NavLink} from "react-router-dom";

import style from './drawer.module.scss'


class Drawer extends Component {
    state = {
        link: [
            {
                id:1,
                nameTo:"/quiz"
            },
            {
                id:2,
                nameTo:"/auth"
            },
            {
                id:3,
                nameTo:"/quiz-creator"
            },
            {
                id:4,
                nameTo:"/quizList"
            },
        ]
    }



renderLi = () => {
    return this.state.link.map((item, index) => {
        return <NavLink to={item.nameTo} key={index}> {item.id} Link </NavLink>
    })
}


render()
{
    return (
        <>
            <nav className={this.props.isOpen ? style.Drawer : style.DrawerClose}>
                <ul style={{display: "flex", flexDirection: 'column'}}>

                    {
                        this.renderLi()
                    }
                </ul>
            </nav>
            {this.props.isOpen ? <BackDrop onclick={this.props.onClose}/> : null}
        </>
    );
}

}


export default Drawer;


