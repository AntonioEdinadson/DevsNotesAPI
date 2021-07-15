const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// const routes = require('./routes/');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(morgan('dev'));


// USANDO ROUTES.JS
// app.use();

module.exports = app;