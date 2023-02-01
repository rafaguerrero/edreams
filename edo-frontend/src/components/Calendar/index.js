import React from 'react';
import Input from '../Input';
import './index.scss';

function Calendar() {
    return (
        <div className='edo-calendar'>
            <Input name="calendar" value='' placeholder='20/10/2022' onChange={() => console.log("CHANGE")}/>
        </div>
    );
}

export default Calendar;
