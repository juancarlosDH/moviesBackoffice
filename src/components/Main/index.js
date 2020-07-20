import React from 'react';
import User from '../Menu/User';
import Dashboard from '../Dashboard';
import Footer from '../Main/Footer';

function Main() {
    return (
        <div id="content-wrapper" className="d-flex flex-column">

			<div id="content">

                <User />

                <Dashboard />

			</div>

			<Footer />

		</div>
    )
}
export default Main;