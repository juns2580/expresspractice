const path = require('path');

const paper = require('paper');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const mainRoutes = require('./routes/main');

app.use(bodyParser.urlencoded({extended: false}));

app.use(mainRoutes);

app.listen(3000);