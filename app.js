let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let app = express();
let CodeEntry = require('./models/code');
mongoose.connect('mongodb://127.0.0.1/code_review');
mongoose.Promise = global.Promise;

if(!module.parent) {
  let port = 3000;
  app.listen(port, () => console.log('listening on 3000'));
}

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  let codeEntry = CodeEntry.find({});
  codeEntry.exec((err, code) => {
    if (err) res.send(err);
    res.render('index', {code: code});
  });
});

app.get('/new', (req, res) => {
  res.render('new');
});

app.post('/code', (req, res) => {
  let newCodeEntry = new CodeEntry(req.body);
  newCodeEntry.save((err, codeEntry) => {
    if(err) {
      res.send(err);
    } else {
      res.send("Wow! Done!");
    }
  });
});

module.exports = app;
