import React from 'react';
import './App.css';
import './Product.css';

import Menu from './../Menu/Menu'; //aqui me traigo el archivi Menu.js
import Main from './../Main'; //aqui me traigo el archivo index.js

function App() {
    return (
        <div id="wrapper">

			<Menu />
			
			<Main />

		</div>
    )
}

export default App;