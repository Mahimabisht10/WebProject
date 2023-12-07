const Listing = require("../models/listing")
const User = require("../models/user")

module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs");
  }

module.exports.signup = async (req, res, next) => {
    try {
      let { username, email, password } = req.body;
      let newUser = new User({ username, email });
      const registerdUser = await User.register(newUser, password);
      req.login(registerdUser,(err) =>{
        if(err){
          return next(err);
        }
        req.flash("success", "Welcome to Wanderlust!");
      res.redirect("/listings");
      })
      } catch (e) {
      req.flash("error", e.message);
      res.redirect("/signup");
    }
  }

  module.exports.renderLoginForm =  (req, res) => {
    res.render("users/login.ejs");
  }

  module.exports.login = async (req, res) => {
    req.flash("success", "wecome back to Wanderlust");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
  }

  module.exports.logout = (req,res,next) => {
    req.logOut((err) => {
    if (err){
     return next(err);
    }
    req.flash("success","Success fully Logout");
    res.redirect("/listings")
    })
  }