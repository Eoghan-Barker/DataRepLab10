import React from 'react';
import { Books } from './books';
import axios from 'axios';

export class Read extends React.Component {
    // state is used to pass items down to children using state.props.xxx <= json data headers
    // make http request using httpclient axios to pull json data
    // axios makes a http request to the api
    componentDidMount() {
        // promise -result of an async operation
        axios.get('http://localhost:4000/api/books')
        //callback function - a function is passed as an argument to the function
        .then((response)=> {
            this.setState({
               books: response.data.myBooks
            })
            // this function is fulfilling the promise
        })
        .catch((error)=>{console.log(error)});   // handles rejected path
    }
    
    state = {
        // Book Array of book objects
        books: [ ]
    }
    render(){
        return(
            <div>
                <h3>Hello from my Read Component!</h3>
                {/* Embed component in this component, pass books array to Books componant */}
                <Books books={this.state.books}/>
            </div>
        );
    }
}