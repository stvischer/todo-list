const
  mongoose = require('mongoose'),
  connfig = require('config'),
  express = require('express')
  hbs = require('hbs');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost::27017/TodoApp')

const
  app = express();
  port = config.get('server.port');

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=> {
    res.render('home.hbs');
});



app.listen(port, () =>{
  console.log(`Server is up on port ${port}`);
});