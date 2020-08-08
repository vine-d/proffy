import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TextInput } from "react-native";
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage'

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import api from '../../services/api';

function TeacherList() {
	const [teachers,setTeachers] = useState([])
	const [favorites,setFavorites] = useState<number[]>([])
	const [isFiltersVisible,setIsFiltersVisible] = useState(false)

	const [subject,setSubject] = useState('')
	const [week_day,setWeek_day] = useState('')
	const [time,setTime] = useState('')

	useEffect(()=>{
		AsyncStorage.getItem('favorites').then(response => {
			if (response) {
				const favoritedTeachers = JSON.parse(response)
				const favoritedTeachersIds = favoritedTeachers.map( (teacher: Teacher) => teacher.id)
				setFavorites(favoritedTeachersIds)
			}
		})
	},[teachers])

	function handleToogleIsFilterVisible() {
		setIsFiltersVisible(!isFiltersVisible)
	}

	async function handleFilterSubmit() {
		const response = await api.get('classes', {
			params: {
				subject,
				week_day,
				time
			}
		})
		setTeachers(response.data)
		if (teachers.length > 0) {
			setIsFiltersVisible(false)
		}
	}

	return (
		<View style={styles.container}>
			<PageHeader title="Proffys disponíveis"
				headerRight={(
					<BorderlessButton onPress={handleToogleIsFilterVisible}>
						<Feather name="filter" size={20} color="#FFF" />
					</BorderlessButton>
				)}
			>
				{ isFiltersVisible && (
					<View style={styles.searchForm}>
						<Text style={styles.label}>Matéria</Text>
						<TextInput
							style={styles.input}
							value={subject}
							onChangeText={text => setSubject(text)}
							placeholder="Qual matéria?"
						/>
						<View style={styles.inputGroup}>
							<View style={styles.inputBlock}>
								<Text style={styles.label}>Dia da semana</Text>
								<TextInput
									style={styles.input}
									placeholder="Qual dia?"
									value={week_day}
									onChangeText={text => setWeek_day(text)}
								/>
							</View>
							<View style={styles.inputBlock}>
								<Text style={styles.label}>Hora</Text>
								<TextInput
									style={styles.input}
									placeholder="Qual hora?"
									value={time}
									onChangeText={text => setTime(text)}
								/>
							</View>
						</View>
						<RectButton onPress={handleFilterSubmit} style={styles.submitButton}>
							<Text style={styles.submitButtonText}>Filtrar</Text>
						</RectButton>
					</View>
				)}
			</PageHeader>

			<ScrollView
				style={styles.teacherList}
				contentContainerStyle={{
					paddingHorizontal: 16,
					paddingBottom: 16,
				}}
			>
				{teachers.map( (teacher: Teacher) => {
					return (
						<TeacherItem
							key={teacher.id}
							teacher={teacher}
							favorited={favorites.includes(teacher.id)}
						/>
					)
				})}
			</ScrollView>

		</View>
	)
}

export default TeacherList
