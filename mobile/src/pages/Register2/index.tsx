import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, ImageBackground } from 'react-native';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import InputText from '../../components/InputText';

function Register2() {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<Text style={styles.title}>Crie sua conta gratuíta</Text>
				<Text style={styles.description}>Basta preencher esses dados e você estará conosco.</Text>
			</View>

			<View style={styles.registerInputsContainer}>
				<View style={styles.registerInputsHeader}>
					<Text style={styles.registerInputsTitle}>02. E-mail e senha</Text>
				</View>
				<InputText title='E-mail' groupPosition='top' value={email} onChange={setEmail} />
				<InputText title='Password' groupPosition='bottom' value={password} onChange={setPassword} />

				<RectButton onPress={ ()=>{} } style={styles.registerButton}>
					<Text style={styles.registerButtonText}> Concluir cadastro </Text>
				</RectButton>

			</View>
		</View>
	)
}

export default Register2
