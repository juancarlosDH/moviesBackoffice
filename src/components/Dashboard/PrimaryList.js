import React from 'react';
import PrimaryListItem from './PrimaryListItem';

function PrimaryList() {
    return (
        <div className="row">
            <PrimaryListItem title='Cantidad de Peliculas' text='123' fa='fa-clipboard-list' border='border-left-primary'/>

            <PrimaryListItem title='Pelis en Favoritos' text='200' fa='fa-star' border='border-left-success'/>

            <PrimaryListItem title='Cantidad de Usuarios' text='123' fa='fa-user-check' border='border-left-warning'/>
        </div>
    )
}
export default PrimaryList;