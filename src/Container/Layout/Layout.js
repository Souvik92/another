import React from 'react';
import HeaderLayout from '../../Container/HeaderLayout/HeaderLayout';
import Aux from '../../HOC/Auxilliary/Auxilliary';


const layout= (props) => {
    return (
        <Aux >
            <HeaderLayout />  
            <main>{props.children}</main>        
        </Aux>
    );
}

export default layout;