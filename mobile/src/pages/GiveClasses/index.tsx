import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';
import styles from './styles';


function GiveClasses() {
	const { navigate } = useNavigation()

	function handleNavigationToLanding(){
		navigate('Landing')
	}
	return (
		<View style={styles.container}>
			<ImageBackground
				source={giveClassesBgImage}
				resizeMode="contain"
				style={styles.background}
			>
				<Text style={styles.title}>Quer ser um Proffy?</Text>
				<Text style={styles.description}>Para começar você precisa se cadastrar em nossa plataforma web.</Text>
			</ImageBackground>

			<RectButton onPress={handleNavigationToLanding} style={styles.okButton}>
				<Text style={styles.okButtonText}>Valeu!</Text>
			</RectButton>

		</View>
	)
}

export default GiveClasses
