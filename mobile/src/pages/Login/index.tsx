import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import styles from './styles';
import loginBackground from '../../assets/images/login-background.png';
import proffyLogo from '../../assets/images/logo.png'
import { RectButton } from 'react-native-gesture-handler';

function Login() {

	const [toggleCheckBox, setToggleCheckBox] = useState(false)

	function handleToggleCheckBox(){
		setToggleCheckBox(!toggleCheckBox)
	}

	return (
		<View style={styles.container}>
			<ImageBackground
				source={loginBackground}
				resizeMode="contain"
				style={styles.background}
			>
				<Image source={proffyLogo} resizeMode='contain' style={styles.logo} />
				<Text style={styles.description}>Sua plataforma de estudos online.</Text>
			</ImageBackground>

			<View style={styles.loginInputsContainer}>
				<View style={styles.loginInputsHeader}>
					<Text style={styles.loginInputsTitle}>Fazer login</Text>
					<TouchableOpacity>
						<Text style={styles.headerButtonText}>Criar uma conta</Text>
					</TouchableOpacity>
				</View>
				<TextInput
					style={styles.input}
					textContentType='emailAddress'
					placeholder="E-mail"
				/>
				<TextInput
					style={styles.input}
					textContentType='password'
					placeholder="Senha"
				/>
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

				<RectButton onPress={ ()=>{} } style={styles.loginButton}>
					<Text style={styles.loginButtonText}>Entrar</Text>
				</RectButton>

			</View>
		</View>
	)
}

export default Login
