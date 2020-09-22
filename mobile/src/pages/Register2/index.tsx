import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import InputText from '../../components/InputText';
import { useRegisterForm } from '../../contexts/register-form-context';

function Register2() {
	const form = useRegisterForm()
	const { navigate } = useNavigation()

	function handleUserRegister(){
		let user = {
			'name' : form.name,
			'surname' : form.surname,
			'email' : form.email,
			'password' : form.password
		}
		console.log(user)
		navigate('RegisterOk')
	}

	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<Text style={styles.title}>Crie sua conta gratuíta</Text>
				<Text style={styles.description}>Basta preencher esses dados e você estará conosco.</Text>
				<Text>{ form.name +' '+ form.surname }</Text>
			</View>

			<View style={styles.registerInputsContainer}>
				<View style={styles.registerInputsHeader}>
					<Text style={styles.registerInputsTitle}>02. E-mail e senha</Text>
				</View>
				<InputText title='E-mail' groupPosition='top' value={form.email} onChange={form.setEmail} />
				<InputText title='Password' groupPosition='bottom' value={form.password} onChange={form.setPassword} />

				<RectButton onPress={ handleUserRegister } style={styles.registerButton}>
					<Text style={styles.registerButtonText}> Concluir cadastro </Text>
				</RectButton>

			</View>
		</View>
	)
}

export default Register2
