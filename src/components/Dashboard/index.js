import React from 'react';
import PrimaryList from './PrimaryList';
import SecondaryList from './SecondaryList';

import './Dashboard.css';

function Dasboard() {
    return (
        <div className="container-fluid">

            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>

            <PrimaryList />

            <SecondaryList />
        </div>
    )
}
export default Dasboard;