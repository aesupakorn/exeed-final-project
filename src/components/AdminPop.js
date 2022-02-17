import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../App';
const AdminPop = ({ setAdmin }) => {
	const { authSate, authDispatch } = useContext(AuthContext);
	return (
		<form className='pop pop-login'>
			<Link to='/event'>Edit events</Link>
			<hr />
			<p
				className='link'
				onClick={() => {
					authDispatch({ type: 'logout' });
					setAdmin(false);
				}}
			>
				Log out
			</p>
		</form>
	);
};

export default AdminPop;
