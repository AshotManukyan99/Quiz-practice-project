import React from "react";

import style from './menuToggle.module.scss'

const MenuToggle = props => {
    let iconStyle ;
    switch (props.isOpen) {
        case true:
            iconStyle = ` fa fa-times ${style.MenuToggleOpen} `;
            break;
        case false:
            iconStyle = `fa  fa-bars ${style.MenuToggle }`;
            break;
        default:
            break;

    }
    return(
        <i
            className={iconStyle}
            onClick={props.onToggle}

        />
    )
}

export default MenuToggle;