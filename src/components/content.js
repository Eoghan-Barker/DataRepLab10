import React from 'react';

export class Content extends React.Component {
    
    /* used to display content in app when this component is swapped in */
    /* Inherits from React.Component to allow the use of class based components*/
    render() {
        return(
            <div>
                <h1>Hello World!!!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}