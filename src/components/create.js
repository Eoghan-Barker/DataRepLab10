import React from "react";

export class Create extends React.Component {
  constructor() {
    super();
    // Binding event is needed in constructor to handle event invoking
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
    this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
    this.onChangeBookCover = this.onChangeBookCover.bind(this);
    this.state = {
      title: '',
      author: '',
      cover: ''
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(`${this.state.title},
    ${this.state.author}, ${this.state.cover}`);
    // clear the state after logging
    this.setState({title:'', author:'', cover:''});
  }

  // Add the inputed values to the state
  onChangeBookTitle(e) {
    this.setState({ title: e.target.value });
  }

  onChangeBookAuthor(e) {
    this.setState({ author: e.target.value });
  }

  onChangeBookCover(e) {
    this.setState({ cover: e.target.value });
  }

  render() {
    return (
      <div>
        <h3>Hello from my Create Component</h3>
        {/* React form acts similarly to html one, uses JSX
        Invoke methods on submit button press and when the input value is changed
        to update the state */}
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Add Book Title: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeBookTitle}
            />
          </div>
          <div className="form-group">
            <label>Add Book Author: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.author}
              onChange={this.onChangeBookAuthor}
            />
          </div>
          <div className="form-group">
            <label>Add Book Cover: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.cover}
              onChange={this.onChangeBookCover}
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
