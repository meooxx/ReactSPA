import React from 'react'
import Welcome from '../components/welcome'
import Login from '../components/login'
import { Route, Redirect, Switch } from 'react-router-dom'


const App = () => {
	
	return	(
		<div>
		<Switch>
				<Route path='/login' component={Login} />
				<Route path='/nav' component={Welcome} />
				
					
				<Redirect from='*'  to='/nav' /> 
					
				
		</Switch>  
		</div>
			
)
}

export default App