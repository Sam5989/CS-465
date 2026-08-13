const express = require("express");
const router = express.Router();

const tripsController = require("../controllers/trips");

router.route("/trips").get(tripsController.tripsList);

router
    .route('/trips')
    .get(tripsController.tripsList) //GET method routes tripList
    .post(tripsController.tripsAddTrip); // Post Method adds a trip

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;