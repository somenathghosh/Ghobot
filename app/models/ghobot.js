// Example model

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var GhobotSchema = new Schema({

	who: { type: String, lowercase: false, trim: true},
	when: { type: Date, default: Date.now },
	question: { type: String,  lowercase: false, trim: true},
	is_Answered: Boolean,
	answer:[{ 

			engine		: { type: String, lowercase: false, trim: true},
			answer 	: { type: String, lowercase: false, trim: true }

		}]
});


mongoose.model('Ghobot', GhobotSchema);

