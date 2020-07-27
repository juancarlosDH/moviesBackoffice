import React, { Component } from 'react';
import './LastProductInDataBase.css';

class LastProductInDatabase extends Component {
    constructor() {
        super();
        this.state = {
            movie: null
        }
    }

    componentDidMount() {
        this.fetchMovie();
    }

    refreshItem = (e) => {
        e.preventDefault();
        this.fetchMovie();
    }

    fetchMovie() {
        fetch('http://localhost:3001/api/movies/random')
        .then(res => {
            return res.json()
        })
        .then(res => {
            console.log(res)
            this.setState({ movie: res.data })
        })
        .catch(error => { console.log(error); alert('ne se pudo actualizar la pelicula') })
    }

    render() {

        let moovie = 'Cargando...';

        if (this.state.movie) {
            moovie = <div className="card-body">
                        <div className="card-title">{this.state.movie.title}</div>
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4 img-product" src="/assets/images/product_dummy.svg" alt="dummy" />
                        </div>
                        <p>{this.state.movie.description}</p>
                        <a target="_blank" rel="nofollow" href="/">View product detail</a>
                    </div>
        }

        return (
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3" id="title-last-product-in-db">
                        <h6 className="m-0 font-weight-bold text-primary">Pelicula Aleatoria</h6>
                        <a href="/" onClick={this.refreshItem}><i className="fas fa-redo"></i></a>
                    </div>

                    { moovie }

                </div>
            </div>
        )
    }
}

export default LastProductInDatabase;