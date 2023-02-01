const locationsData = require('../data/locations.json');
const validators = require('../validators/validators.js');
const itinerariesService = require('../services/itineraries.service.js');

const NUM_RESULTS = 1000;

const getSearchFromQuery = (req) => {
    return {
        departureLocation: req.query.departureLocation,
        arrivalLocation: req.query.arrivalLocation,
        departureYear: req.query.departureYear,
        departureMonth: req.query.departureMonth,
        departureDay: req.query.departureDay,
    }
}

exports.itineraries = (req, res, next) => {
    const searchRequest = getSearchFromQuery(req);
    if (!validators.isValidLocation(searchRequest.departureLocation) ||
        !validators.isValidLocation(searchRequest.arrivalLocation)) {
            next("Location not valid.");
    } else if (!validators.isValidDate(searchRequest.departureYear,
            searchRequest.departureMonth, 
            searchRequest.departureDay)) {
                next("Departure Date is not valid");
    } else {
        const searchResponse = itinerariesService.search(searchRequest);
        res.send(searchResponse);
    }
}
