var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

Campground.create(
  {
    name:"Granite Hill",
    image:"https://images.unsplash.com/photo-1445308394109-4ec2920981b1?ixlib=rb-0.3.5&s=73115e54fa3d099fcb2d92ccf12eee41&auto=format&fit=crop&w=1053&q=80"
  }, function (err, campground){
      if (err) {
        console.log(err);
      } else {
        console.log("NEWLY CREATE CAMPGROUND");
        console.log(campground);
      }
    });

app.get("/", function(req, res) {
  res.render("landing");
});

app.get("/campgrounds", function(req, res) {
  Campground.find({}, function(err, allCampgrounds){
    if (err) {
      console.log(err);
    } else {
      res.render("campgrounds", {campgrounds: allCampgrounds});
    }
  });
});

app.post("/campgrounds", function(req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image};
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
  res.render("new");
});

app.listen(3000, function() {
  console.log("The YelpCamp Server Has Started");
});
