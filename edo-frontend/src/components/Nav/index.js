import React from 'react';
import { ReactSVG } from 'react-svg';
import './index.scss';

function Nav() {
    return (
        <div className='edo-nav'>
            <ReactSVG className="edo-nav-logo" src="/assets/logo.svg" />
        </div>
    );
}

export default Nav;
