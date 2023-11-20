const express = require('express');
const routes = require('./routes/index')
const morgan = require('morgan');
const cors = require('cors');
const app = express();


app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use("/", routes)


module.exports = app