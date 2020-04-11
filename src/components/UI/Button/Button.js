import React from "react";

import style from './button.module.scss'

const Button = props => {
    let btnStyle ;
     switch (props.type) {
         case  "primary":
             btnStyle = style.primary;
             if (props.disabled){
                 btnStyle = style.primaryDisabled
             }
             break;
         case "secondary":
             btnStyle = style.secondary
             break;
         default:
             btnStyle = style.primary

     }
    return(
        <button  onClick={props.onclick}
                 className={btnStyle}
                 disabled={props.disabled}>
            {props.children}
        </button>
    )
}

export  default  Button;