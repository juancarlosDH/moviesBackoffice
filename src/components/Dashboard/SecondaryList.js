import React from 'react';
import LastProductInDatabase from './LastProductInDataBase';
import Categories from './Categories';

function SecondaryList() {

    const categories = [1,3,56];

    return (
        <div className="row">
            
            <LastProductInDatabase />

            <Categories categories={categories}/>
        </div>
    )
}

export default SecondaryList;