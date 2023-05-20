import React from 'react';
import Navbar from './layouts/NavbarAndFooter/Navbar';
import './App.css';
import { ExploreTopBooks } from './layouts/HomePage/ExploreTopBooks';
import { Carousel } from './layouts/HomePage/Carousel';
import { Heros } from './layouts/HomePage/Heros';
import { LibraryServices } from './layouts/HomePage/LibraryServices';

function App() {
	return (
		<div>
			<Navbar />
			<ExploreTopBooks />
			<Carousel />
			<Heros />
			<LibraryServices />
		</div>
	);
}

export default App;
