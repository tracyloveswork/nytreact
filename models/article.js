// First, we hook mongoose into the model with a require
var mongoose = require("mongoose");

// Then, we save the mongoose.Schema class as simply "Schema"

var Schema = mongoose.Schema;

// With our new Schema class, we create the mongoDB Object
var ArticleSchema = new Schema({

  title: {
    type: String,
    trim: true,
    required: "String is Required"
  },
  // Date
  date: {
    type: Date,
    default: Date.now
  },
  url: {
    type: String,
    trim: true,
    required: "String is Required"
  },
  snippet: {
    type: String
  }
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Export the module
module.exports = Article;
