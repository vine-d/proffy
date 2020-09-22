import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

function RegisterOk() {
	const { navigate } = useNavigation()

	function handleNavigateToLogin() {
		navigate('Login')
	}

	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<Text style={styles.title}>Cadastro Concluído!</Text>
				<Text style={styles.description}>Agora você já faz parte da plataforma Proffy.</Text>
			</View>

			<RectButton onPress={ handleNavigateToLogin } style={styles.registerButton}>
				<Text style={styles.registerButtonText}> Fazer Login </Text>
			</RectButton>
		</View>
	)
}

export default RegisterOk
