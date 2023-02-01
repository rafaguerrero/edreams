import React from 'react';
import Calendar from '../Calendar';
import Dropdown from '../Dropdown';
import './index.scss';

function SearchForm() {
    return (
        <div className='edo-search'>
            <Dropdown/>
            <Dropdown/>
            <Calendar />
            <Calendar />
        </div>
    );
}

export default SearchForm;
