import React, {Component} from "react";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";

import style from './layout.module.scss'


class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggleClickHandler = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        return (
            <div>
                <Drawer isOpen={this.state.isOpen} onClose={this.toggleClickHandler}/>
                <MenuToggle onToggle={this.toggleClickHandler} isOpen={this.state.isOpen}/>
                <main className={style.main}>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout;