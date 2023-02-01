import React, { useEffect, useState } from 'react';
import { apiCall } from '../../utils/api';
import Calendar from '../Calendar';
import LocationDropdown from '../LocationDropdown';
import './index.scss';

function SearchForm() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        apiCall('locations')
            .then(locations => {
                console.log("---------------");
                console.log("LOCATIONS");
                console.log(locations);
                console.log("---------------");

                setLocations(locations);
            })
    }, []);

    return (
        <div className='edo-search'>
            <LocationDropdown name="origin" placeholder="¿Desde dónde sales?" locations={locations}/>
            <LocationDropdown name="destination" placeholder="¿A dónde vas?" locations={locations}/>
            <Calendar />
            <Calendar />
        </div>
    );
}

export default SearchForm;
