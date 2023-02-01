# Init backend
Execute in the main folder
    
    cd edo-backend
    npm install
    npm start

This will start the server listening on _http://localhost:3000_

# Available services
* (GET) __/locations__ : retrieves the list of available locations.
    * _http://localhost:3000/itineraries_
* (GET) __/itineraries__ : search flights for a given mandatory params
    * __departureLocation__: the city where you are searching flights from.
    * __arrivalLocation__: the city where you are searching flights to.
    * __departureYear__: the year which you are searching flights from.
    * __departureMonth__: the month which you are searching flights from.
    * __departureDay__: the day which you are searching flights from.

This is an example of a call to locations service.
    
    http://localhost:3000/locations

This is an example of a call to itineraries service.

    http://localhost:3000/itineraries?departureLocation=Paris&arrivalLocation=London&departureYear=2022&departureMonth=04&departureDay=07
