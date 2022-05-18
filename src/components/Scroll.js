import React from 'react';
import '../containers/App.css'
const Scroll = (props) => {
    return (

       
        <div style={{ overflowY: 'scroll',marginTop: '1rem', scrollMarginBottom: '1rem', height: '500px'}}>
                {props.children}
        </div>

        
    );
}

export default Scroll;