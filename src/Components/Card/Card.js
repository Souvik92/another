import React from 'react';
import classes from './Card.css';

const card = (props)=>{
    const resizeFunc = () =>{
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    }
    return(
        <div ref={props.myRef} onClick={props.clicked} onResize={resizeFunc} className={classes.Card}>
            {props.children}
        </div>
    )
}

export default card;