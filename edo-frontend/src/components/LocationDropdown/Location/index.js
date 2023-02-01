import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Icon';
import './index.scss';

function Location({ location, onClick }) {
    return (
        <li className="edo-location"
                value={location}
                onMouseDown={() => onClick(location)}>
            <Icon className='edo-location-icon' name="flight" size={25} />
            <span className='edo-location-text'>{location}</span>
        </li>
    );
}

Location.propTypes = {
    location: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

export default Location;
