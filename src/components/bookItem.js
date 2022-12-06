import React from "react";
import Card from "react-bootstrap/Card";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";

export class BookItem extends React.Component {
  constructor() {
    // Binding event is needed to handle event invoking
    super();
    this.DeleteBook = this.DeleteBook.bind(this);
  }
  DeleteBook(e) {
    e.preventDefault();

    // use axios to talk http to the server - this will delete a record from the database
    // we get a response and refresh the page
    axios
      .delete("http://localhost:4000/api/books/" + this.props.book._id)
      .then((res)=>{
        this.props.ReloadData();
      })
      .catch();
  }

  render() {
    return (
      <div>
        {/* Bootstrap Card for stylizing */}
        <Card>
          {/* Get onject info from book array */}
          <Card.Header>{this.props.book.title}</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <img src={this.props.book.cover} width="200" height="200" />
              <footer>{this.props.book.author}</footer>
            </blockquote>
          </Card.Body>
          {/* Add a link to the edit component on a button */}
          <Link to={"/edit/" + this.props.book._id} className="btn btn-primary">
            Edit
          </Link>
          {/* Add a red button to invoke a method to delete a book */}
          <Button variant="danger" onClick={this.DeleteBook}>
            Delete
          </Button>
        </Card>
      </div>
    );
  }
}
