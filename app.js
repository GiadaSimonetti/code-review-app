let express = require('express');
let app = express();
let port = 3000;
app.listen(port);
console.log('go to port 3000');

app.get('/', function(req, res){
  
});

module.exports = app;
