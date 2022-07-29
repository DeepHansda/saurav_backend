const express = require('express');
const router = new express.Router();
const visitorsCTR = require('../controllers/visitorsCTR')

router.get('/getVisitors',visitorsCTR.getVisitors)
router.post('/createVisitor',visitorsCTR.createVisitor)
router.post('/deleteVisitor/:id',visitorsCTR.deleteVisitor)

module.exports = router