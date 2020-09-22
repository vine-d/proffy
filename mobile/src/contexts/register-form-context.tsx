import React, { createContext, useState, useContext } from 'react'

interface RegisterFormContextData {
	name: string
	surname: string
	email: string
	password: string
	setName: (newName: string) => void
	setSurname: (newSurname: string) => void
	setEmail: (newEmail: string) => void
	setPassword: (newPassword: string) => void
}

const RegisterFormContext = createContext<RegisterFormContextData>({} as RegisterFormContextData)

export const FormContext: React.FC = ({children}) => {
	const [name, setName] = useState<string>('')
	const [surname, setSurname] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	return (
		<RegisterFormContext.Provider
			value={{ name, surname, email, password,
				setName, setSurname, setEmail, setPassword
			}
		}>
			{children}
		</RegisterFormContext.Provider>
	)
}

export const useRegisterForm = () => useContext(RegisterFormContext)
