const express = require('express');
const { default: helmet } = require('helmet')
const compression = require('compression');
const morgan = require('morgan');
const app = express()


//init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression())


// morgan("compile")
// morgan("commom")
// morgan("short")
// morgan("tiny")
// morgan("dev")


// test route

app.get('/', (req, res, next) => {
    const strCompress = 'hello form minh tu'
    return res.status(200).json({
        message: 'xinchao',
        metadata: strCompress.repeat(22323230)
    })
});

//init db
require('./dbs/init.mongodb')


//init routes


module.exports = app;

