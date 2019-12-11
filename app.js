 const app = require('express')();

const express = require("express");


const mongoose = require('mongoose'),
	  
	  passport = require('passport'),
	  
	  LocalStrategy = require('passport-local'),
	  
	  methodOverride = require("method-override"),
	  
	  flash = require('connect-flash');
	  

var bodyParser = require('body-parser');

var theatre = require(`./models/theatre`);

var User = require(`./models/user`);


//var seedDB = require("./seeds");

var comment = require("./models/comment");

var theatresRoutes = require("./routes/theatres");

var commentsRoutes = require("./routes/comments");
var indexRoutes = require("./routes/index");
 

//Passport Configuration

app.use(require("express-session")(
{
	secret: "ABC",
	resave: false,
	saveUninitialized: false
}));

app.use(flash());


app.use(passport.initialize());

app.use(passport.session());




passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(methodOverride("_method"));

mongoose.connect('mongodb+srv://tejaswa:mongoAdmin@cluster0-0ycag.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useCreateIndex: true}).then(()=>{
	console.log('Connected to DB');
}).catch(err =>{
	console.log('Error: ', err.message);
} );

app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.use((req,res,next)=>{
	res.locals.currentUser = req.user;
	res.locals.error = req.flash("error");
	res.locals.success = req.flash("success");
	next();
});

const port =3000;

//seedDB();
//Schema Setup

/*var theatreSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String
});

var theatre  = mongoose.model("theatre", theatreSchema);

/*theatre.create(
{name:"PVR",image:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftimesofindia.indiatimes.com%2Fphoto%2F56038627.cms&f=1&nofb=1",
description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},

(err, theatre) => {
	if(err){
		console.log("Insertion Failed");
	}
	else{
		console.log(theatre);
	}
}
);  */

//Routes



	app.use("/",indexRoutes);

app.use("/theatre",theatresRoutes);	

app.use("/theatre/:id/comments",commentsRoutes);





app.listen(port,()=> {
	console.log(`TheatreEX running on port ${port}`);
});