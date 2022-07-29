const express = require('express');
const { createAd, getAds, deleteAds } = require('../controllers/adsCTR');
const { upload } = require('../services/imgUploadService');
const router = new express.Router();

router.post('/createAd',upload.single("img"),createAd)
router.get('/getAds',getAds)
router.post('/deleteAds/:id',deleteAds)

module.exports = router