app.get("/", function(req, res) {
  res.render("landing");
});

// AUTH ROUTES

// SHOW THE REGISTER FORM
app.get("/register", function(req, res) {
  res.render("register");
});

// HANDLE SIGN UP LOGIC
app.post("/register", function(req, res) {
  var newUser = new User({username: req.body.username});
  User.register(newUser, req.body.password, function(err, user) {
    if (err) {
      console.log(err);
      return res.render("register");
    }
    passport.authenticate("local")(req, res, function(){
      res.redirect("/campgrounds");
    });
  });
});

// SHOW LOGIN FORM
app.get("/login", function(req, res) {
  res.render("login");
});

// HANDLE LOGIN LOGIC
app.post("/login", passport.authenticate("local",
  {
    successRedirect: "/campgrounds",
    failureRedirect: "/login"

  }), function(req, res) {

});

// LOGOUT ROUTE
app.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/campgrounds");
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()){
    return next();
  }
  res.redirect("/login");
};
