import React, {  } from 'react'

import Home from './components/Home.jsx';
import View from './components/View.jsx';
import Edit from './components/Edit.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route exact path='/' element={<Home />}></Route>
					<Route exact path='/view/:id' element={<View />}></Route>
					<Route exact path='/edit/:id' element={<Edit />}></Route>
				</Routes>
			</Router>		
		</div>
	);
}

export default App