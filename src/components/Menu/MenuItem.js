import React from 'react';

function MenuItem (props) {
    return (
        <li className={ 'nav-item ' + props.active}>
            <a className="nav-link" href={props.href}>
                <i className={'fas fa-fw ' + props.fa }></i>
                <span>{props.name}</span></a>
        </li>
    )
}

MenuItem.defaultProps = {
    active : '',
}

export default MenuItem;