const pg = require('pg')

const express = require('express');
const routes = require('./routes/index')
const morgan = require('morgan');
const cors = require('cors');

const app = express();

const pool= new pg.Pool({
    connectionString: process.env.DATABASE_URL
})


app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use("/", routes)


module.exports = app