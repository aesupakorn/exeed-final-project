import React from 'react';
import History from '../components/History';
import RoomSim from '../components/RoomSim';

import './Homepage.css'
const Homepage = () => {
	return (
		<div style={{display:"flex"}}>

			<RoomSim/>
			<History/>
		</div>
	);
};

export default Homepage;
