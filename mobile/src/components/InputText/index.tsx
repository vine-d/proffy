import React from 'react';
import { View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles'

interface InputTextProps {
	title: string
	groupPosition?: string
	contentVisibilityToggle?: boolean
}

const InputText:React.FC<InputTextProps> = ({ title, groupPosition, contentVisibilityToggle }) => {

	return (
		<View style={[
			styles.container,
			groupPosition === 'top' ? styles.containerTop : {},
			groupPosition === 'bottom' ? styles.containerBottom : {}
		]}
		>
			<TextInput style={styles.input} placeholder={title} />
		</View>
	)
}

export default InputText
