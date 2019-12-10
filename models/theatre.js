const mongoose = require("mongoose");

const theatreSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String,
	author: {
		id : {
			type :mongoose.Schema.Types.ObjectId,
			ref: "User"
		}
	},
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Comment"
			
		}
	]
});

module.exports  = mongoose.model("theatre", theatreSchema);