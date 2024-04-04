const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model
const Model = mongoose.model('trips');

// GET: /trips - lists all the trips
// Regardless of outcome, response must include HTML status code and JSON message
// to the requesting client
const tripsList = async(req, res) => {
    const q = await Model 
        .find({}) // No filter, returns all records
        .exec();

        // Shows results of querey on the console
        //console.log(q);

    if (!q) // Database didn't return any data
    { 
        return res
             .status(404)
             .json(err);
    } else { // Return resulting trip list
        return res 
            .status(200)
            .json(q);
    }
};

module.exports = {
    tripsList
};

const tripsFindByCode = async(req, res) => {
    const q = await Model 
        .find({'code' : req.params.tripCode }) // Return single record
        .exec();

        // Shows results of querey on the console
        // console.log(q);

    if (!q) // Database didn't return any data
    { 
        return res
             .status(404)
             .json(err);
    } else { // Return resulting trip list
        return res 
            .status(200)
            .json(q);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};
