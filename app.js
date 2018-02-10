var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
  {name:"Salmon Creek", image:"https://images.unsplash.com/photo-1506535995048-638aa1b62b77?ixlib=rb-0.3.5&s=e0421b3f8e3bc5054feeffb2eb317fe3&auto=format&fit=crop&w=1050&q=80"},
  {name:"Granite Hill", image:"https://images.unsplash.com/photo-1445308394109-4ec2920981b1?ixlib=rb-0.3.5&s=73115e54fa3d099fcb2d92ccf12eee41&auto=format&fit=crop&w=1053&q=80"},
  {name:"Mountain Goat's Rest", image:"https://images.unsplash.com/photo-1501703979959-797917eb21c8?ixlib=rb-0.3.5&s=4b8f5be7a86c173634b1978923074cd1&auto=format&fit=crop&w=1189&q=80"}
]

app.get("/", function(req, res) {
  res.render("landing");
});

app.get("/campgrounds", function(req, res) {
  res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image};
});

app.get("/campgrounds/new", function(req, res) {
  res.render("new");
});

app.listen(3000, function() {
  console.log("The YelpCamp Server Has Started");
});
