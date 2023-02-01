import React from 'react';
import Nav from '../../components/Nav';
import SearchForm from '../../components/SearchForm';
import './index.scss';

function Home() {
    return (
        <div className='edo-home'>
            <Nav />
            <div className='edo-home-content'>
                <SearchForm />
            </div>
        </div>
    );
}

export default Home;
