import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../pages/Login'
import { NavigationContainer } from '@react-navigation/native'


const { Navigator, Screen } = createStackNavigator()

const AuthStack:React.FC = () => (
	<NavigationContainer>
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name="Login" component={Login} />
		</Navigator>
	</NavigationContainer>
)

export default AuthStack
