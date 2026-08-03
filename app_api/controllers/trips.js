const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // register model
const Model = mongoose.model('trips')

// Get: /trips - lists all the trips
//regardless of outcome, response must include html status code
// and JSON message to the requesting client

const tripsList = async(req, res) => {
    const q = await Model
        .find({}) // No filter, return all records
        .exec();
    
    if (!q)
    {
        return res
                .status(404)
                .json(err);
        
    } else {
        return res
                .status(200)
                .json(q);
    }

};





// Get: /trips - lists all the trips
//regardless of outcome, response must include html status code
// and JSON message to the requesting client

const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code': req.params.tripCode }) // return single record
        .exec();
    
    if (!q)
    {
        return res
                .status(404)
                .json(err);
        
    } else {
        return res
                .status(200)
                .json(q);
    }

};

module.exports = {
    tripsList,
    tripsFindByCode
}