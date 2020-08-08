import React, { useEffect, useState } from 'react';
import { View, ScrollView } from "react-native";
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import AsyncStorage from '@react-native-community/async-storage';

function Favorites() {
	const [favorites,setFavorites] = useState([])

	useEffect(()=>{
		AsyncStorage.getItem('favorites').then(response => {
			if (response) {
				const favoritedTeachers = JSON.parse(response)
				setFavorites(favoritedTeachers)
			}
		})
	},[favorites])

	return (
		<View style={styles.container}>
			<PageHeader title="Meus Proffys favoritos"/>

			<ScrollView
				style={styles.favoritesList}
				contentContainerStyle={{
					paddingHorizontal: 16,
					paddingBottom: 16,
				}}
			>
				{favorites.map( (teacher: Teacher) => {
					return (
						<TeacherItem
							key={teacher.id}
							teacher={teacher}
							favorited
						/>
					)
				})}
			</ScrollView>

		</View>
	)
}

export default Favorites
