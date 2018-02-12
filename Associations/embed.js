var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

var postSchema = new mongoose.Schema ({
  title: String,
  content: String
});

var Post = mongoose.model("Post", postSchema);

var userSchema = new mongoose.Schema ({
  email: String,
  name: String,
  post: [postSchema]
});

var User = mongoose.model("User", userSchema);

var newUser = new User ({
  email: "hermione@hogwarts.edu",
  name: "Hermione Granger"
});

newUser.post.push ({
  title: "How to brew polyjuice potion",
  content: "Go to potions class"
});


newUser.save(function(err, user) {
  if (err) {
    console.log(err)
  } else {
    console.log(user);
  }
});

//var newPost = new Post ({
//  title: "Reflections on Apples",
//  content: "They are delicious"
//});
//
//newPost.save(function(err, post) {
//  if (err) {
//    console.log(err);
//  } else {
//    console.log(post);
//  }
//});
