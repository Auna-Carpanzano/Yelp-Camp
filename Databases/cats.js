var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

var george = new Cat({
  name: "Mrs.Norris",
  age: 7,
  temperament: "Evil"
});

george.save(function(err, cat){
  if(err){
    console.log("SOMETHING WENT WRONG");
  } else {
    console.log("WE JUST SAVED A CAT TO THE DATABASE");
    console.log(cat);
  }
});
