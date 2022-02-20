import React from 'react';
import { useState } from 'react';
import './History.css'
const History = () => {
	const [history, setHistory] = useState('');
	async function fetchGetSchedule() {
		const res = await fetch('');
		const json = await res.json();
		setHistory(json);
	}

	return (
		<div>
			<h1>History</h1>

		</div>
	);
};

export default History;
