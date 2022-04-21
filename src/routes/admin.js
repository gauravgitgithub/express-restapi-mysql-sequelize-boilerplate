const express = require('express');
const userController = require('../controllers/user/user.controller');

const router = express.Router();

/*===============================
Admin routes
===============================*/


/*
All routes after <host>/api/admin/ will be listed here
*/

router.get('/allUsers', userController.allUsers);

exports.Router = router;
