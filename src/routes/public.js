const express = require('express');
const validate = require('express-validation');

const userController = require('../controllers/user/user.controller');
const userValidator = require('../controllers/user/user.validator');

const router = express.Router();

/*===============================
Public routes
===============================*/

router.get('/', (req,res) => {
	res.json({ message: `This is a public route.` })
});

/*
All routes after <host>/public/ will be listed here
*/

router.post('/login',validate(userValidator.login),userController.login);
router.post('/register',validate(userValidator.register),userController.register);

exports.Router = router;
