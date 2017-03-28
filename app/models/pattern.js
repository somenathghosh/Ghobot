var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var PatternSchema = new Schema({

	regexp: String,
    actionKey: String,
    actionValue: String,
    callback: String,
    description: { type: String, lowercase: false, trim: true},
    valid: Boolean
    
});

mongoose.model('Pattern', PatternSchema);

