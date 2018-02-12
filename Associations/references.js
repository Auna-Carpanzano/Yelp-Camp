var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

var postSchema = new mongoose.Schema ({
  title: String,
  content: String
});

var Post = mongoose.model("Post", postSchema);

var userSchema = new mongoose.Schema ({
  email: String,
  name: String,
  post: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post"
    }
  ]
});

var User = mongoose.model("User", userSchema);

//User.create ({
//  email: "bob@gmail.com",
//  name: "Bob Belcher"
//});

Post.create ({
  title: "How to cook the best burger",
  content: "Blah blah blah"
}, function(err, post) {
  console.log(post);
});
