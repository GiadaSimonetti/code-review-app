let express = require('express');
let app = express();
let port = 3000;
app.listen(port);
console.log('go to port 3000');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.get('/new', (req, res) => {
  res.render('new');
});

module.exports = app;
