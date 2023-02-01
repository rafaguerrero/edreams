import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import './index.scss';
import Location from './Location';

function LocationDropdown({ name, placeholder, locations, onSelect }) {
    const [focus, setFocus] = useState(false);
    const [filter, setFilter] = useState('');
    const [filtered, setFiltered] = useState([...locations]);

    const onFilterChange = useCallback((filter) => {
        setFilter(filter);
        setFiltered(locations.filter(loc => loc.match(new RegExp(filter, 'i'))));
    }, [locations]);

    useEffect(() => onFilterChange(''), [locations, onFilterChange])
    
    return (
        <div className='edo-dropdown'
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}>

            <Input name={name}
                    value={filter}
                    placeholder={placeholder}
                    onChange={onFilterChange}/>

            {
                focus &&
                <ul className="edo-dropdown-options">
                    { 
                        filtered.length === 0 &&
                        <div>No results</div>
                    }
                    { filtered.map(location => <Location key={location} location={location} onClick={onFilterChange}/>) }
                </ul>
            }
        </div>
    );
}

LocationDropdown.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    locations: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onSelect: PropTypes.func,
};

export default LocationDropdown;
