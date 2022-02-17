
import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Loading from './pages/Loading';
import Navbar from './components/Navbar';
import EventFormpage from './pages/EventFormpage';
import React,{ useState,useContext } from 'react';
import { useReducer } from 'react';

import Error from './pages/Error';
function reducer(state,action){
	if(action.type === 'login'){
		return true
	}
	if(action.type === 'logout'){
		return false
	}
	return state
}


const AuthContext = React.createContext();


function App() {
	const [authState , authDispatch] = useReducer(reducer , false)
	const [loading ,setLoading] = useState(false)

	return (

		<AuthContext.Provider value={{authState,authDispatch}}>
			{loading && <Loading/> }

			<Router>
				<Navbar setLoading={setLoading}/>

				<div className='main-container'>
				<Routes>
					<Route path='/' element={<Homepage />} />
					{authState && <Route path='/event' element={<EventFormpage/>}/>}
					<Route path='*' element={<Navigate replace to='/'/>}/>
				</Routes>
				</div>
			</Router>
		</AuthContext.Provider>

	);
}
export default App;
export {AuthContext}