const express = require('express');
const router = express.Router();
const { createTrip, getTrips } = require('../controllers/tripController');

router.post('/trips', createTrip);
router.get('/trips', getTrips);

module.exports = router;
