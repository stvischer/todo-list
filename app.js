const
  connfig = require('config'),
  express = require('express')
  hbs = require('hbs');

const
  app = express();
  port = config.get('server.port');

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));



app.listen(port, () =>{
  console.log(`Server is up on port ${port}`);
});