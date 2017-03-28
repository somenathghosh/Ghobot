'use strict';

var ddgr = require('./ddgr');

class Engine {
	
	static interceptor (query){
		return undefined;
	}

	static listen (query,callback){
		if(callback) {
			act(query,callback);
		}
		else{
			throw new Error('no callback provided!');
		}
	}
	

	static act (query, callback){

            // check for custom patterns
            for (var i = 0; i < patterns.length; i++) {
                var pattern = patterns[i];
                var r = new RegExp(pattern.regexp, "i");
                var matches = text.match(r);
                //console.log(matches);
                if (matches) {
                    switch (pattern.actionKey) {
                        case 'rewrite':
                            text = pattern.actionValue;
                            for (var j = 1; j < matches.length; j++) {
                                text = text.replace("$" + j, matches[j]);
                            }
                            //console.log("rewritten to " + text);
                            if (pattern.callback !== undefined) {
                                pattern.callback.call(this, matches);
                            }
                            break;
                        case 'response':
//                                var response = text.replace(r, pattern.actionValue);
                            var response = pattern.actionValue;
                            if (response !== undefined) {
                                for (var j = 1; j < matches.length; j++) {
                                    response = response.replace("$" + j, matches[j]);
                                }
                                this.addChatEntry(response, "bot");
                            }
                            
                            if (pattern.callback !== undefined) {
                                pattern.callback.call(this, matches);
                            }
                            
                    }
                    
                }
            }




	}

}


module.exports = Engine;