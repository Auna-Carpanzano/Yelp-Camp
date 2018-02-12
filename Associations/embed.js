var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

var userSchema = new mongoose.Schema ({
  email: String,
  name: String
});

var User = mongoose.model("User", userSchema);

var postSchema = new mongoose.Schema ({
  title: String,
  content: String
});

var postModel = mongoose.model("Post", postSchema);
