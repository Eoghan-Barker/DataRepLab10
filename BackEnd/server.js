const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
//Import express body-parser middleware to search the body of a http request from post method
const bodyParser = require("body-parser");
// import mongoose
const mongoose = require("mongoose");

//exception catching
main().catch((err) => console.log(err));

// function to connect to database asyncronisly using mongoose
async function main() {
  await mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.v6ph3w1.mongodb.net/?retryWrites=true&w=majority"
  );

  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

// define the data to go into the mongoDB collection
const bookSchema = new mongoose.Schema({
  title: String,
  cover: String,
  author: String,
});

// create a model from the schema - model = object to interact with the database
const bookModel = mongoose.model("Books", bookSchema);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Allow the client to make api requests, disable cors exceptions
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/books", (req, res) => {
  //Query the database on the server to show all the documents
  bookModel.find((error, data) => {
    res.json(data);
  });
});

app.get("/api/books/:id", (req, res) => {
  // getting id that is passed as part of the url
  console.log(req.params.id);

  // handle the return from the database
  bookModel.findById(req.params.id, (error, data) => {
    res.json(data);
  });
});

// Handle the edit button server side and edit the correct book
app.put("/api/book/:id", (req, res) => {
  console.log("Update: " + req.params.id);
  bookModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (error, data) => {
      res.send(data);
    }
  );
});

// Pull the data out from the form without the data being in the url
// This gives access to the data server side
// This will let us work with a database
app.post("/api/books", (req, res) => {
  console.log(req.body);
  // create a record in the database, set the fields using http POST
  bookModel.create({
    title: req.body.title,
    cover: req.body.cover,
    author: req.body.author,
  });
  res.send("data recieved");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
