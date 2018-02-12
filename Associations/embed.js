var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

var userSchema = new mongoose.Schema ({
  email: String,
  name: String
});
