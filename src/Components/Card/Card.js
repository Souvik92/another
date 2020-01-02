import React from 'react';
import classes from './Card.css';

const card = (props)=>{
    const myfunc = () =>{
        console.log(document.getElementById('myData').clientWidth);
    }
    return(
        <div ref={props.myRef} onClick={props.clicked} className={classes.Card}>
            {props.children}
        </div>
    )
}

export default card;