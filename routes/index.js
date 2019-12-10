var express = require("express");
var router  = express.Router();
var theatre = require("../models/theatre");

var passport = require("passport");
var User = require("../models/user");

var middleware = require("../middleware/index.js");

router.get("/", (req,res)=>{
	console.log("in landgin area");
	
//	response.send("Landing PAge");
	
	res.render("landing");
});






//Auth ROutes


router.get("/register",(req,res)=>{
	res.render("register");
});

router.post("/register",(req,res)=>{
	console.log("Signing user up");
	User.register(new User({username: req.body.username}), req.body.password, (error, newUser)=>{
		if(error){
			console.log(error);
			
			return res.render("register",{"error":error.message});
		}
		passport.authenticate("local")(req,res,()=>{
			console.log(newUser);
			req.flash("success","Welcom to TheatreEx"+req.body.username);
			res.redirect("/theatre");
		});
	});
});

//show login form

router.get("/login",(req,res)=>{
	res.render("login",{message: req.flash("error")});
});

router.post("/login",passport.authenticate("local",{
	successRedirect:"/theatre",
	failureRedirect: "/login"
}),(req,res)=>{
	console.log("Logged In");
});


router.get("/logout",(req,res) =>{
	req.logout();
	req.flash("error","Logged you out");
	res.redirect("/theatre");
});

//Functions


/*function home(request, response){
	
	
	
}
*/
	/*var theatres = [
		{name : "Wave", image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftimesofindia.indiatimes.com%2Fphoto%2F56038627.cms&f=1&nofb=1"},
		{name : "PVR", image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftimesofindia.indiatimes.com%2Fphoto%2F56038627.cms&f=1&nofb=1"},
		{name : "FunCinemas", image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftimesofindia.indiatimes.com%2Fphoto%2F56038627.cms&f=1&nofb=1"}
	]
	*/







module.exports = router;