import React from 'react';
//import Aux from '../../HOC/AuxilliaryComponent/AuxilliaryComponent';
//import classes from '../ContentHeader/ContentHeader.css';
import classes from './ContentHeader.css';

const contentHeader = (props) => {
    const elements = props.categories.map(el => {
        return <li key={el["sub-category"]}><span className='fa fa-file-code-o'></span>{el["sub-category"]}</li>
    })
    return (
        <div className={classes.ContentHeader}>
            <ul>
                <li><span className='fa fa-file-code-o'></span>{props.categories[0].category}</li>
                {elements}
            </ul>
        </div>
    );
}


export default contentHeader;