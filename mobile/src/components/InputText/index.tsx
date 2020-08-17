import React from 'react';
import { View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles'

interface InputTextProps {
	title?: string
	visibilityToggle?: boolean
}

const InputText:React.FC<InputTextProps> = ({ title, children, visibilityToggle }) => {

	return (
		<View style={styles.container}>
			<TextInput style={styles.input} placeholder={title} >
			</TextInput>
		</View>
	)
}

export default InputText
