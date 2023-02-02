import React, { useEffect, useState } from 'react';
import { apiCall } from '../../utils/api';
import Calendar from '../Calendar';
import LocationDropdown from '../LocationDropdown';
import './index.scss';

function SearchForm() {
    const [state, setState] = useState({});
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

    const canSubmit = () => state.departure && state.destination && state.from && state.to;

    const handleChange = (key, value) => setState({ ...state, [key]: value });

    return (
        <div className='edo-search'>
            <div className='edo-search-inputs'>
                <LocationDropdown onSelect={(value) => handleChange('departure', value)} name="departure" placeholder="¿Desde dónde sales?" locations={locations}/>
                <LocationDropdown onSelect={(value) => handleChange('destination', value)} name="destination" placeholder="¿A dónde vas?" locations={locations}/>
                <Calendar name="from" onSelect={(value) => handleChange('from', value)} />
                <Calendar name="to" onSelect={(value) => handleChange('to', value)} />
            </div>
            <div className='edo-search-actions'>
                <button className={`edo-search-submit ${canSubmit() ? 'active' : 'disabled'}`}
                        onClick={() => console.log(state)}
                        type="button"
                        disabled={!canSubmit()}>
                    Buscar vuelos
                </button>
            </div>
        </div>
    );
}


export default SearchForm;
