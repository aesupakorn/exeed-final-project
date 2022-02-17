import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';
import { AuthContext } from '../App'
import { useContext } from 'react'
import SchedulePop from './SchedulePop';
import AdminPop from './AdminPop';
import LoginPop from './LoginPop';



let eventTrack = [
	{ eventName: 'Exceed', startTime: Date() },
	{ eventName: 'Exceed', startTime: Date() },
	{ eventName: 'Exceed', startTime: Date() },
	{ eventName: 'Exceed', startTime: Date() },
	{ eventName: 'Exceed', startTime: Date() },
	{ eventName: 'Exceed', startTime: Date() },
	{ eventName: 'Exceed', startTime: Date() },
];

let adminAccount = {
	id: 'superman',
	password: '12345',
};



const Navbar = ({setLoading}) => {
	const {authSate , authDispatch} = useContext(AuthContext)
	const [showSchedule, setShowSchedule] = useState(false);
	const [showLoginForm, setShowLoginForm] = useState(false);
	const [scheduleList, setScheduleList] = useState(eventTrack);
	const [loginForm, setLoginForm] = useState({ id: '', password: '' });
	const [admin, setAdmin] = useState(false);

	let navigate = useNavigate()


	function onFormChange(event) {
		const { name, value } = event.target;
		return setLoginForm((prev) => {
			return { ...prev, [name]: value };
		});
	}
	function onLoginForm(event) {
		event.preventDefault();

		if (

			loginForm.id === adminAccount.id &&
			loginForm.password === adminAccount.password) {
				setLoading(true)
				setTimeout(() => {
					setAdmin(true);
					authDispatch({ type : 'login' ,payload : admin})
					setLoading(false)
				}, 800);

		}
	}

	return (


			<div>
				<nav>
					<div className='nav-container'>
						<p
							className='link'
							onClick={() => {
								setShowSchedule(!showSchedule);
							}}
						>
							schedule
						</p>
						<h1  style={{cursor: 'pointer'}} onClick={()=>{navigate('/')}}>Logo</h1>
						<p
							className='link'
							onClick={() => {
								setShowLoginForm(!showLoginForm);
							}}
						>
							{admin ? 'Admin' : 'Login'}
						</p>

						{showSchedule && (
							<SchedulePop scheduleList={scheduleList}/>
						)}

						{showLoginForm &&
							(admin ? (
								<AdminPop setAdmin={setAdmin}/>
							) : (
								<LoginPop onLoginForm={onLoginForm} loginForm={loginForm} onFormChange={onFormChange}/>
							))}
					</div>
				</nav>
			</div>


	);
};

export default Navbar;
