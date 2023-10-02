var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index'); //route controller

/* GET home page. */
router.get('/', indexController.home); //route for home page
router.get('/about', indexController.about); //route for about page
router.get('/projects', indexController.projects); //route for project page
router.get('/services', indexController.services); //route for services page
router.get('/contact', indexController.contact); //route for contact page

module.exports = router;
