import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {Shop} from './components/Shop';

const App = () => {
	return (
		<>
			<Header />
			<Shop />
			<Footer />
		  {/* shopping_cart */}
		</>
	);
};

export default App;
