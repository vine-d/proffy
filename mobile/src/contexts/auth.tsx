import React, { createContext, useState, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import api from '../services/api'

import * as auth from '../services/auth';

interface AuthContextData {
	signed: boolean
	user: object|null
	loading: boolean
	login(): Promise<void>
	logout(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({children}) => {
	const [user,setUser] = useState<object|null>(null)
	const [loading,setLoading] = useState(true)

	useEffect(() => {
		async function loadStorageData() {
			const [storagedUser, storagedToken] = await AsyncStorage.multiGet(['@Proffy:user','@Proffy:token'])

			if ( storagedUser && storagedToken ) {
				api.defaults.headers['Authorization'] = `Bearer ${storagedToken[1]}`
				setUser(JSON.parse(storagedUser[1]))
				setLoading(false)
			}
		}
		loadStorageData()
	},[])

	async function login() {
		const response = await auth.login()
		setUser(response.user)

		api.defaults.headers['Authorization'] = `Bearer ${response.token}`

		await AsyncStorage.setItem('@Proffy:user', JSON.stringify(response.user))
		await AsyncStorage.setItem('@Proffy:token', response.token)
	}

	function logout() {
		AsyncStorage.clear().then( () => {
			setUser(null)
		})
	}

	return (
		<AuthContext.Provider value={{ signed: !!user, user, loading, login, logout }} >
			{children}
		</AuthContext.Provider>
	)
}

export function useAuth() {
	const context = useContext(AuthContext)
	return context
}
