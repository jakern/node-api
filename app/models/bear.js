var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var NPCSchema   = new Schema({
	name: String
});

module.exports = mongoose.model('NPC', NPCSchema);
