// Import necessary modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Import routers
var indexRouter = require('../ayo-portfolio/routes/index');
var usersRouter = require('../ayo-portfolio/routes/users');

// Initialize the express app
var app = express();

// Set up the view engine
app.set('views', path.join(__dirname, '../ayo-portfolio/views'));  // Define the views directory
app.set('view engine', 'ejs');  // Set EJS as the view engine

// Middleware setup
app.use(logger('dev'));  // Use morgan for logging
app.use(express.json());  // Parse JSON payloads
app.use(express.urlencoded({ extended: false }));  // Parse URL-encoded payloads
app.use(cookieParser());  // Parse cookies
app.use(express.static(path.join(__dirname, '../public')));  // Serve static files from the public directory

// Define routes
app.use('/', indexRouter);  // Use the index router for the root path
app.use('/users', usersRouter);  // Use the users router for the /users path

// Handle POST requests to the root path
app.post('/', (req, res) => {
  const formData = req.body;  // Extract form data from the request body
  console.log(formData);  // Log form data to console (or do something with it)
  res.redirect('/');  // Redirect user to home page
});

// Handle 404 errors (Page Not Found)
app.use(function (req, res, next) {
  next(createError(404));  // Forward to error handler with a 404 error
});

// General error handler
app.use(function (err, req, res, next) {
  // Set error message and details based on environment
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);  // Use the error's status or default to 500 (Internal Server Error)
  res.render('error');  // Render the error view
});

// Export the app for use in other modules
module.exports = app;
