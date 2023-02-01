const express = require('express');
const logger = require('morgan');
const bodyParser = require("body-parser");
const locationsController = require('./controllers/locations.js');
const itinerariesController = require('./controllers/itineraries.js');
const errorsController = require('./controllers/errors.js');
const cors = require('./cors');

const app = express();
app.set("port", 3000);
app.use(cors);
app.use(logger(function (tokens, req, res) {
    return [
      tokens.url(req, res),
      tokens.status(req, res),
      '-',
      tokens.res(req, res, 'content-length'), 
      '-',
      tokens['response-time'](req, res), 'ms',
      '-',
      (req.user ? (req.user._id) : "")
    ].join(' ')
}));

const router = express.Router();

router.use(bodyParser.urlencoded({
    extended: false
}));
router.use(bodyParser.json());

//Routes
router.get("/locations", locationsController.locations);
router.get("/itineraries", itinerariesController.itineraries);

//Middleware
router.use(errorsController.internalError);

//Starting server
app.use("/", router);
app.listen(app.get("port"), () => 
    console.log(`Server started and listening in http:localhost:${app.get("port")}`)
);