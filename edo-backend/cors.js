const cors = require('cors');

const WHITELIST_ORIGINS = [
    // Frontend
    'http://localhost:8080'
];

const corsOptions = {
  credentials: true,
  origin: function (origin, callback) {
    if (WHITELIST_ORIGINS.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS - ' + origin));
    }
  }
};

module.exports = cors(corsOptions);