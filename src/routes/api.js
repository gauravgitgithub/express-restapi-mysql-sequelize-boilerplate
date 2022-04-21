const express = require('express');
const validate = require('express-validation');

const userController = require('../controllers/user/user.controller');
const userValidator = require('../controllers/user/user.validator');

const router = express.Router();

/*===============================
 API routes
===============================*/

/*
All routes after <host>/api/ will be listed here
*/

router.get('/me', userController.profile);
router.post('/changePassword',validate(userValidator.changePassword),userController.changePassword);

exports.Router = router;