import React from 'react';
import { BookItem } from './bookItem';

export class Books extends React.Component {
    render() {
        // Arrow function to return all of the objects from the books array
        return this.props.books.map(
            (book)=>{
                {/* map function makes bookitem component and passes each one a book,
                    added a key to stop infinate components from being made*/}
                return <BookItem book = {book} key={book._id} ReloadData={this.props.ReloadData}></BookItem>
            }
        );
    }
}