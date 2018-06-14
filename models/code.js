let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CodeEntrySchema = new Schema({
  content: String
});

mongoose.Promise = global.Promise;

module.exports = mongoose.model('CodeEntry', CodeEntrySchema);
