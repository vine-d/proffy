import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import InputText from '../../components/InputText';

function Register1() {

	const [name, setName] = useState('')
	const [surname, setSurname] = useState('')

	const { navigate } = useNavigation()

	function handleNavigationToRegister2(){
		navigate('Register2')
	}
	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<Text style={styles.title}>Crie sua conta gratuíta</Text>
				<Text style={styles.description}>Basta preencher esses dados e você estará conosco.</Text>
			</View>

			<View style={styles.registerInputsContainer}>
				<View style={styles.registerInputsHeader}>
					<Text style={styles.registerInputsTitle}>01. Quem é você?</Text>
				</View>
				<InputText title='Nome' groupPosition='top' value={name} onChange={setName} />
				<InputText title='Sobrenome' groupPosition='bottom' value={surname} onChange={setSurname} />

				<RectButton onPress={ handleNavigationToRegister2 } style={styles.registerButton}>
					<Text style={styles.registerButtonText}> Próximo </Text>
				</RectButton>

			</View>
		</View>
	)
}

export default Register1
