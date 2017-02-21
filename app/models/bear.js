var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var NPCSchema   = new Schema({
	name: String,
	size: Number,
	footprint: [Number, Number],
	reach: Number,
	type: [String],
	mobility: { type: String }
});

module.exports = mongoose.model('NPC', NPCSchema);
