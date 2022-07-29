const express = require('express');
const router = new express.Router();
const {upload} = require('../services/imgUploadService')
const {createAppDetails,getAppDetails,delAppDetails} = require('../controllers/appsCTR')

router.post('/createDes',upload.single("img"),createAppDetails)
router.get('/getAppDes',getAppDetails)
router.post('/delAppDes/:id',delAppDetails)

module.exports = router