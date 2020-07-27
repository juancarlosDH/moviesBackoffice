import React, { Component } from 'react';
import CategoryItem from './CategoryItem';

class Categories extends Component {

    constructor() {
        super();
        this.state = {
            categories : []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/genres/')
        .then(res => {
            return res.json()
        })
        .then(res => {
            //console.log(res)
            this.setState({ categories: res.data })
        })
        .catch(error => { console.log(error); alert('No se pudo traer los generos') })
    }


    render () {
    return (
        <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Genres</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                       
                       {
                           this.state.categories.map(function(genre, index) {
                             return <CategoryItem name={genre.name} key={index} />
                           })
                       }
                        
                    </div>
                </div>
            </div>
        </div>
        )
    }
}



export default Categories;