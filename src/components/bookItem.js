import React from "react";
import Card from "react-bootstrap/Card";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { Link } from "react-router-dom";

export class BookItem extends React.Component {
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
        </Card>
      </div>
    );
  }
}
