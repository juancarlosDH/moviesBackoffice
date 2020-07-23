import React from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';

function Categories(props) {

    return (
        <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                       
                       {
                           props.categories.map(function(element, index) {
                             return <CategoryItem number={element} key={index} />
                           })
                       }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

Categories.propTypes = {
    categories : PropTypes.array.isRequired
}



export default Categories;