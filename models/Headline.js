// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var headlineSchema = new Schema({
  // title is a required string
  headline: {
    type: String,
    required: true,
    unique: true
  },
  
  // link is a required string
  summary: {
    type: String,
    required: true
  },
  // This only saves one note's ObjectId, ref refers to the Note model
  date: String,
    saved: {
      type: Boolean,
      default: false
  }
});

// Create the Article model with the ArticleSchema
var Headline = mongoose.model("Headline", headlineSchema);

// Export the model
module.exports = Headline;
