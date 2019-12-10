/*const mongoose = require("mongoose");

var theatre = require("./models/theatre");

var comment = require("./models/comment");

mongoose.connect("http://mongoose")

var data = [
	{
		name : "Nazrul Tirtha",
		image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FbMiHViHB0Zg%2Fmaxresdefault.jpg&f=1&nofb=1",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	
	{
		name : "PVR",
		image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.vectorstock.com%2Fi%2F1000x1000%2F10%2F57%2Fcinema-hall-with-white-screen-vector-21271057.jpg&f=1&nofb=1",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	
	{
		name : "Wave",
		image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.kinja-img.com%2Fgawker-media%2Fimage%2Fupload%2Fs--m9daP_xN--%2Fc_scale%2Cf_auto%2Cfl_progressive%2Cq_80%2Cw_800%2Funsnbwg2cke5spzlpsuy.jpg&f=1&nofb=1" ,
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	
	{
		name : "FunCinemas",
		image : "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fil6.picdn.net%2Fshutterstock%2Fvideos%2F671029%2Fthumb%2F1.jpg&f=1&nofb=1",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	
	
	{
		name : "Carnival",
		image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F2%2F2f%2FSala_de_cine.jpg%2F1200px-Sala_de_cine.jpg&f=1&nofb=1",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	
	
	{
		name : "RabindraTirtha",
		image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F2%2F2f%2FSala_de_cine.jpg%2F1200px-Sala_de_cine.jpg&f=1&nofb=1",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	
	
	
	
	
]



function seedDB(){
	theatre.remove({}, (error)=>{
	
	if(error){
		console.log(error)
	}
	else{
		console.log("Databse Seeded");
		data.forEach(function(seed){
		theatre.create(seed, (error,theatre) => {
			if(error){
				console.log(error);
			}
			else{
				
				console.log( "Theatre Added");
				//create a comment
				comment.create(
				{
					text: "wrqrqwjrkqhrkjqwrhkqrq",
					author: "Hank"
				}, (err, comment) => {
					if(err){
						console.log(err);
					}
					else{
						theatre.comments.push(comment);
						theatre.save();
						console.log("comment added");
					}
				})
			}
		})
	});
	}
	
	
});
	
	
	
}

module.exports = seedDB;  */