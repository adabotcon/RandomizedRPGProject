const mongoose = require('mongoose');

const charactersSchema = mongoose.Schema({
	name: {type: String, required: true},
});

charactersSchema.methods.apiRepr = function(){
	return {
		id: this.id,
		name: this.name,
	};
}

const Characters = mongoose.model('Characters', charactersSchema);

module.exports = {Characters};