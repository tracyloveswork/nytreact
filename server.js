// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Require database models
var Article = require("./models/article");

// Create a new express app
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3001;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Adding a static routed for the build folder
app.use(express.static("build"));

// MongoDB configuration (Change this URL to your own DB)
// mongoose.connect("mongodb://localhost/nytreact");
mongoose.connect("mongodb://heroku_7hw3g68w:b5is82rgjl7bo4s2uhp5knhcp3@ds129003.mlab.com:29003/heroku_7hw3g68w");

var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/build/static/index.html");
});

// Route to get all saved articles.
app.get("/api/saved", function(req, res) {

  Article.find({}, function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  }); // End of get saved articles
});

// Route to save articles
app.post("/api/saved", function(req, res) {

  console.log("BODY: ");
 console.log(req.body);

 var saved = [];

 var newArticle = {};
 newArticle.title = req.body.title;
 newArticle.date = req.body.date;
 newArticle.url = req.body.url;
 newArticle.snippet = req.body.snippet;

 var article = new Article(newArticle);

 article.save(function(err, doc) {

  if (err) {
   console.log(err);
    }
   else {
    saved.push(article);
    console.log("*******************");
    console.log(saved);
	}
 });
}); // End of save articles post

// Route to delete saved articles
app.delete("/api/saved/:id", function(req, res) {

  console.log("Delete ID: " + req.params.id);

  Article.findByIdAndRemove(req.params.id, function (err, response) {
    if(err){
      res.send("Delete error: " + err);
    }
    res.send(response);
  });
});

// -------------------------------------------------

// Starting our express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
