import React from 'react';
import LastProductInDatabase from './LastProductInDataBase';
import Categories from './Categories';

function SecondaryList() {

    return (
        <div className="row">
            
            <LastProductInDatabase />

            <Categories />
        </div>
    )
}

export default SecondaryList;