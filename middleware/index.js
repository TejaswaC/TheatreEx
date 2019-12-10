//Middleware code
var middlewareObj ={};
var theatre = require("../models/theatre.js");
var comment = require("../models/comment.js");



middlewareObj.checkTheatreOwnership  = function (req,res,next){
	if(req.isAuthenticated()){
		theatre.findById(req.params.id, (err, foundTheatre)=>{
			if(err){
				req.flash("error", "Campground Not Found");
				res.redirect("back");
			}
			else{
				if(foundTheatre.author.id.equals(req.user._id)){
					//res.render("theatre/edit",{theatre: foundTheatre});
					next();
				}
				else{
					res.flash("error","Permission Denied");
					res.redirect("back");
				}
			}
		});
	}
	else{
		req.flash("error", "Please Login!");
		res.redirect("back");
	}
	
	
}


middlewareObj.checkCommentOwnership = function (req,res,next){
	if(req.isAuthenticated()){
		comment.findById(req.params.comment_id, (err, foundComment)=>{
			if(err){
				req.flash("error","Comment Not Found");
				res.redirect("back");
			}
			else{
				if(foundComment.author.id.equals(req.user._id)){
					//res.render("theatre/edit",{theatre: foundTheatre});
					next();
				}
				else{
					res.flash("error","Permission Denied");
					res.redirect("back");
				}
			}
		});
	}
	else{
		req.flash("error", "Please Login!");
		res.redirect("back");
	}
	
	
}


middlewareObj.isLoggedIn = function (req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	req.flash("error", "Please Login First!");
	res.redirect("/login");
}


module.exports = middlewareObj;