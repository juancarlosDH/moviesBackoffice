import React from 'react';
import CategoryItem from './CategoryItem';

function Categories() {

    const categories = [1,2,3,4,5,6];

    return (
        <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                       
                       {
                           categories.map(function(element) {
                             return <CategoryItem />
                           })
                       }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories;