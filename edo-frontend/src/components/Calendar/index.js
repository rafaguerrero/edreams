import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import './index.scss';

function Calendar({ name, onSelect }) {
    return (
        <div className='edo-calendar'>
            <Input type='date'
                    name={name}
                    onChange={onSelect}/>
        </div>
    );
}

Calendar.propTypes = {
    name: PropTypes.string.isRequired,
    onSelect: PropTypes.func,
};

export default Calendar;
