let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let app = express();
let Code = require('./models/code');
mongoose.connect('mongodb://127.0.0.1/code_review');
mongoose.Promise = global.Promise;

let port = 3000;
app.listen(port, () => console.log('listening on 3000'));


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.get('/new', (req, res) => {
  res.render('new');
});

app.post('/code', (req, res) => {
  let newCode = new Code(req.body);
    console.log(newCode, "CODE OBJECT")
  newCode.save((err, code) => {
    console.log(code, "CODE IN SAVE")
    if(err) {
      res.send(err);
    } else {
      res.send("Wow! Done!");
    }
  });
});

module.exports = app;
