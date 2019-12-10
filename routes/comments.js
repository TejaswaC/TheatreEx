var express = require("express");
var router  = express.Router({mergeParams: true});
var theatre = require("../models/theatre");

var comment = require("../models/comment");
var User = require("../models/user");
var middleware = require("../middleware");



router.get("/new",middleware.isLoggedIn, addComment);

router.post("/",middleware.isLoggedIn ,saveComment);

router.get("/:comment_id/edit",middleware.checkCommentOwnership, (req,res)=>{
	comment.findById(req.params.comment_id, (error, foundComment)=>{
		if(error){
			console.log(error);
			res.redirect("back");
		}
		else{
			console.log(req.params.comment_id);
						console.log(req.params.id);

		res.render("comments/edit", {theatre_id: req.params.id, comment: foundComment});

		}
	});
});


router.put("/:comment_id",middleware.checkCommentOwnership,(req,res)=>{
	comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, (err,updatedComment)=>{
		if(err){
			console.log(err);
			res.redirect("back");
		}
		else{
			res.redirect("/theatre/"+req.params.id);
		}
	})
});

router.delete("/:comment_id",middleware.checkCommentOwnership, (req,res)=>{
	comment.findByIdAndRemove(req.params.comment_id,(err)=>{
		if(err){
			console.log(err);
			res.redirect("back");
		}
		else{
			req.flash("success", "Comment Deleted");
			res.redirect("/theatre/"+req.params.id);
		}
	})
})

function addComment(req, res){
	console.log(req.params.id);
	theatre.findById(req.params.id, (err, theatre) => {
		if(err){
			console.log(err);
		}
		else{
			console.log(theatre.name);
				res.render("comments/new",{theatre: theatre});

		}
	})
	
}

function saveComment(req, res){
	//lookup theatre using ID
	console.log("Theatre ID"+req.params.id);
	theatre.findById(req.params.id, (error, theatre) =>{
		if(error){
			console.log("Theatre adding"+error);
			res.redirect("/theatre");
		}
		else{
			comment.create(req.body.comment, (err, comment) =>{
				if(error){
					console.log("In comment"+error);
				}
				else{
					console.log(req.user.username);
					comment.author.id = req.user._id;
					comment.author.username = req.user.username;
					comment.save();
					theatre.comments.push(comment);
					theatre.save();
					req.flash("success","Comment added sucessfully");
					res.redirect("/theatre/" + theatre._id);
				}
			});
		}
	});
	//create new comment
	//connect new comment to theatre
	//redirect theatre show page
	
}



module.exports = router;