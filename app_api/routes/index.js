const express = require('express'); // Express app
const router = express.Router(); // Router logic

// Routes the controllers that will be routed
const tripsController = require('../controllers/trips');

// define route for our trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList); // GET method routes triplist

// GET method routes tripsFindByCode - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode); 

module.exports = router;