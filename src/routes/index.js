const express = require('express');
const router = express.Router();
const publicRoutes = require('./public').Router
const apiRoutes = require('./api').Router
const adminRoutes = require('./admin').Router
const apiMiddleware = require('../middleware/apiAuth')
const adminMiddleware = require('../middleware/adminAuth')



router.use('/public', publicRoutes);
router.use('/api', apiMiddleware, apiRoutes);
router.use('/api/admin', apiMiddleware, adminMiddleware, adminRoutes);

exports.Router = router;
