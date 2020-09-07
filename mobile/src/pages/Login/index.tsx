import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, ImageBackground } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import { useAuth } from '../../contexts/auth';
import loginBackground from '../../assets/images/login-background.png';
import proffyLogo from '../../assets/images/logo-big.png'
import { RectButton } from 'react-native-gesture-handler';
import InputText from '../../components/InputText';

function Login() {

	const { signed, login } = useAuth()

	const { navigate } = useNavigation()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [toggleCheckBox, setToggleCheckBox] = useState(false)

	function handleNavigationToRegister(){
		navigate('Register1')
	}

	function handleLogin() {
		login(email, password)
	}

	function handleToggleCheckBox() {
		setToggleCheckBox(!toggleCheckBox)
	}

	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<ImageBackground
					source={loginBackground}
					resizeMode="contain"
					style={styles.background}
				>
					<View style={styles.headerLogo}>
						<Image source={proffyLogo} resizeMode='contain'/>
						<Text style={styles.description}>Sua plataforma de estudos online.</Text>
					</View>

				</ImageBackground>
			</View>

			<View style={styles.loginInputsContainer}>
				<View style={styles.loginInputsHeader}>
					<Text style={styles.loginInputsTitle}>Fazer login</Text>
					<TouchableOpacity onPress={handleNavigationToRegister}>
						<Text style={styles.headerButtonText}>Criar uma conta</Text>
					</TouchableOpacity>
				</View>
				<InputText title='E-mail' groupPosition='top' value={email} onChange={setEmail} />
				<InputText title='Password' groupPosition='bottom' value={password} onChange={setPassword} />
				<View style={styles.loginInputsFooter}>
					<View style={styles.remember}>
						<CheckBox
							value={toggleCheckBox}
							onValueChange={handleToggleCheckBox}
						/>
						<Text style={styles.checkBoxLabel}>Lembrar-me</Text>
					</View>
					<TouchableOpacity>
						<Text style={styles.footerButtonText}>Esqueci minha senha</Text>
					</TouchableOpacity>
				</View>

				<RectButton onPress={ handleLogin } style={styles.loginButton}>
					<Text style={styles.loginButtonText}>Entrar</Text>
				</RectButton>

			</View>
		</View>
	)
}

export default Login
