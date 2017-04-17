const
  connfig = require('config'),
  express = require('express')
  hbs = require('hbs');

const
  app = express();
  port = config.get('server.port');