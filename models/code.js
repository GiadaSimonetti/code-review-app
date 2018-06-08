let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CodeSchema = new Schema({
  content: String
});

mongoose.Promise = global.Promise;

module.exports = mongoose.model('Code', CodeSchema);
