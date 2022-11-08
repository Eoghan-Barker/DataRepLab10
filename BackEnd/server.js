const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
//Import express body-parser middleware to search the body of a http request from post method
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

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
    // make an array of book objects to send to the server
  const books = [
    {
      title: "Learn Git in a Month of Lunches",
      isbn: "1617292419",
      pageCount: 0,
      thumbnailUrl:
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
      authors: ["Rick Umali"],
      categories: [],
    },
    {
      title: "MongoDB in Action, Second Edition",
      isbn: "1617291609",
      pageCount: 0,
      thumbnailUrl:
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
      status: "MEAP",
      authors: [
        "Kyle Banker",
        "Peter Bakkum",
        "Tim Hawkins",
        "Shaun Verch",
        "Douglas Garrett",
      ],
      categories: [],
    },
    {
      title: "Getting MEAN with Mongo, Express, Angular, and Node",
      isbn: "1617292036",
      pageCount: 0,
      thumbnailUrl:
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
      status: "MEAP",
      authors: ["Simon Holmes"],
      categories: [],
    },
  ];

  // send the json data to the server
  res.json({
    myBooks: books,
    message: "Hello from our API",
  });
});

// Pull the data out from the form without the data being in the url
// This gives access to the data server side
// This will let us work with a database
app.post("/api/books", (req, res) => {
    console.log(req.body);
    res.send("data recieved");
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


