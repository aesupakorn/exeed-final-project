import React from 'react';
import './Navbar.css';
const SchedulePop = ({ scheduleList }) => {
	return (
		<div className='pop pop-schedule'>
			{scheduleList.map((element, index) => {
				return (
					<div key={index}>
						<h5>{element.eventName}</h5>
						<p>{element.startTime}</p>
					</div>
				);
			})}
		</div>
	);
};

export default SchedulePop;
