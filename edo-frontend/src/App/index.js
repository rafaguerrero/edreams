import React from 'react';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Results from '../pages/Results';

import './index.scss';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact title="Results" path="/results" element={<Results />} />
                <Route exact title="Home" path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
