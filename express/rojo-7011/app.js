//var createError = require('http-errors');
//var express = require('express');
//var path = require('path');
//var cookieParser = require('cookie-parser');
//var logger = require('morgan');

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');


import dotenv from "dotenv"
dotenv.config()

import express from 'express'
import mongoose from 'mongoose';
import { productRouter } from "./products/router.js";

const { PORT, MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOSTNAME } = process.env
const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}/?retryWrites=true&w=majority`;

const app = express();
app.use(express.json());
app.use("/products", productRouter)

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
// app.use(logger('dev'));
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.get("/", (req, res) => {
  res.send(`El API esta corriendo en puerto ${PORT}`)
})

app.listen(
  PORT,
  ()=>{
    mongoose.connect(
      MONGO_URI,
      {
        dbName: "sample_training"
      }
    )
  }
)
// catch 404 and forward to error handler
//app.use(function(req, res, next) {
//  next(createError(404));
//});

// error handler
//app.use(function(err, req, res, next) {
//  // set locals, only providing error in development
//  res.locals.message = err.message;
//  res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//  // render the error page
//  res.status(err.status || 500);
//  res.render('error');
//});
//
//module.exports = app;
