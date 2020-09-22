import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../pages/Login'
import Register1 from '../pages/Register1'
import Register2 from '../pages/Register2'
import RegisterOk from '../pages/RegisterOk'

import { FormContext } from '../contexts/register-form-context';

const { Navigator, Screen } = createStackNavigator()

const AuthStack:React.FC = () => (
	<FormContext>
		<Navigator screenOptions={{ headerShown: false }}>
		<Screen name="Login" component={Login} />
		<Screen name="Register1" component={Register1} />
		<Screen name="Register2" component={Register2} />
		<Screen name="RegisterOk" component={RegisterOk} />
		</Navigator>
	</FormContext>
)

export default AuthStack
