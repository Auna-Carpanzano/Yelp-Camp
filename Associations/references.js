var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require("./models/post");

//User.create ({
//  email: "bob@gmail.com",
//  name: "Bob Belcher"
//});

//Post.create ({
//  title: "How to cook the best burger part 3",
//  content: "aergeagaergh"
//}, function(err, post) {
//  User.findOne({email: "bob@gmail.com"}, function(err, foundUser) {
//    if (err) {
//      console.log(err);
//    } else {
//      foundUser.post.push(post._id);
//      foundUser.save(function(err, data) {
//        if (err) {
//          console.log(err);
//        } else {
//          console.log(data);
//        }
//      });
//    }
//  });
//});
//
//User.findOne({email: "bob@gmail.com"}).populate("post").exec(function(err, user) {
//  if (err) {
//    console.log(err);
//  } else {
//    console.log(user);
//  }
//});
