const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
// const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV) {
  app.use(express.static("client"));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Add routes, both API and view
// app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googleBookSearch"
);

app.get("/hello", (req, res) => {
  res.send("Hello World");
});

app.get("/api/books", (req, res) => {
  db.Book.find({})
    .then(function(queryResult) {
      res.json(queryResult);
    })
    .catch(function(err) {
      res.json(err);
    });
});

app.post("/api/books", (req, res) => {
  db.Book.create(req.body)
    .then(function() {
      res.send("success");
    })
    .catch(function(err) {
      res.json(err);
    });
});

app.delete("/api/books/:id", (req, res) => {
  db.Book.find({ _id: req.params.id })
    .remove()
    .then(function() {
      res.send("Comment deleted.");
    })
    .catch(function(err) {
      res.json(err);
    });
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
