var express = require("express");
var router  = express.Router();
var theatre = require("../models/theatre");

var comment = require("../models/comment");
var middleware =require("../middleware/index.js");

router.get("/", getTheatres);






router.get("/new",middleware.isLoggedIn, addTheatres);


router.post("/",middleware.isLoggedIn, saveTheatre);

router.get("/:id", showTheatre);

//edit theatre
router.get("/:id/edit",middleware.checkTheatreOwnership, (req,res)=>{
	
		theatre.findById(req.params.id,(error,foundTheatre)=>{
			res.render("theatre/edit", {theatre: foundTheatre});}
			
		
	);
	
	
	
});

//update theatre
router.put("/:id",middleware.isLoggedIn,(req,res)=>{
	theatre.findByIdAndUpdate(req.params.id,req.body.theatre,(error,foundTheatre)=>{
		if(error){
			console.log(error);
		}
		else{
			res.redirect("/theatre/"+foundTheatre._id);
		}
	})
});

router.delete("/:id",(req,res)=>{
	theatre.findByIdAndRemove(req.params.id,(err)=>{
		if(err){
			res.redirect("/theatre");
		}
		else{
			res.redirect("/theatre");
		}
	})
})

function getTheatres(request, response){
	//console.log(request.user);
theatre.find({}, (error, allTheatres) => {
	if(error){
		console.log(error);
	}
	else{
			response.render("theatre/theatres", {theatres : allTheatres, currentUser:request.user});

	}
})
}


function saveTheatre(request, response){
	//get data from form
	var name = request.body.name;
	var image= request.body.image;
	var description = request.body.description;
	var author = {
		id : request.user._id,
		username : request.user.username
	}
	var newTheatre =  {
		name : name,
		image : image,
		description: description,
		author: author
	};
	//theatres.push(newTheatre);
	console.log(newTheatre);
	theatre.create(newTheatre,(error, newEntry) => {
		if(error){
			console.log("Yahaan par nahi chala" +error);
		}
		else{
				console.log("Chal gaya hai kuch aur natak hai");
				response.redirect("/theatre");

		}
	})
	
	//redirect back to theatres page

	
}

function addTheatres(request,response){
	
	response.render("theatre/theatreForm");
	
}

function showTheatre(request, response){
	theatre.findById(request.params.id).populate("comments").exec((error, foundTheatre) =>{
		if(error){
			console.log(error);
			
		}
		else{
			console.log(foundTheatre);
			response.render("theatre/show", {theatre: foundTheatre});
			
	}
	})
}



module.exports = router;