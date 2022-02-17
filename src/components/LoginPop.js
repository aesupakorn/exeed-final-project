import React from 'react';

const LoginPop = ({ onLoginForm, loginForm, onFormChange }) => {
	return (
		<form className='pop pop-login' onSubmit={onLoginForm}>
			<div className='login-container'>
				<h4>Admin</h4>
				<label name='id'>Id</label>
				<input
					name='id'
					value={loginForm.id}
					type='text'
					placeholder='Enter id'
					onChange={onFormChange}
				/>
				<label name='password'>Password</label>
				<input
					name='password'
					value={loginForm.password}
					type='text'
					placeholder='Enter password'
					onChange={onFormChange}
				/>
				<button className='login-btn' type='submit'>
					login
				</button>
			</div>
		</form>
	);
};

export default LoginPop;
