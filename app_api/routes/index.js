const express = require('express'); // Express app
const router = express.Router(); // Router logic
const { expressjwt: jwt } = require("express-jwt");

const auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: "payload",
  algorithms: ["HS256"],
});


// Routes the controllers that will be routed
const authController = require('../controllers/authentication');
const tripsController = require('../controllers/trips');

router
    .route('/login')
    .post(authController.login);

router
    .route('/register')
    .post(authController.register);

// define route for our trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList) // GET method routes triplist
    .post(auth, tripsController.tripsAddTrip);

// GET method routes tripsFindByCode - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode) 
    .put(auth, tripsController.tripsUpdateTrip);

module.exports = router;