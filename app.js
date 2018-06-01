let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let port = 3000;
app.listen(port, () => console.log('listening on 3000'));

app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.get('/new', (req, res) => {
  res.render('new');
});

app.post('/code-list', (req, res) => {
  console.log(req.body);
});

module.exports = app;
