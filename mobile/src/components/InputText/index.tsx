import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles'

interface InputTextProps {
	title: string
	value: string
	onChange: Function
	groupPosition?: string
	contentVisibilityToggle?: boolean
}

const InputText:React.FC<InputTextProps> = ({ title, value, onChange, groupPosition, contentVisibilityToggle }) => {

	return (
		<View style={[
			styles.container,
			groupPosition === 'top' ? styles.containerTop : {},
			groupPosition === 'bottom' ? styles.containerBottom : {}
		]}
		>
			<TextInput
				style={styles.input}
				placeholder={title}
				value={value}
				onChangeText={text => onChange(text)}
			/>
		</View>
	)
}

export default InputText
