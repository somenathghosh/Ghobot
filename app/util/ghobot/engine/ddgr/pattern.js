
var mongoose = require('mongoose'),
var Pattern = mongoose.model('Pattern');


class Patterns {

	static get (callback){

		Pattern.find({valid:true}).exec(callback);

	}


}

module.exports = Patterns





    	