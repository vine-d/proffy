import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

function TeacherItem() {
	return (
		<View style={styles.container} >
			<View style={styles.profile}>
				<Image
					source={{ uri: "https://avatars3.githubusercontent.com/u/1598657?s=460&u=8aea005900b0d02ff50d20f53db8c9d51e2b17b3&v=4" }}
					style={styles.avatar}
				/>

				<View style={styles.profileInfo}>
					<Text style={styles.name}>Vinícius Dutra</Text>
					<Text style={styles.subject}>DevOps Engineer</Text>
				</View>
			</View>
			<Text style={styles.bio}>
				Uma bio bem bacana para um devops engineer fullstack hackudao.
				{'\n\n'}
				Focado e obstinado!
			</Text>
			<View style={styles.footer}>
				<Text style={styles.price}>
					Preço/hora{'   '}
					<Text style={styles.priceValue}>R$125</Text>
				</Text>
			</View>
			<View style={styles.buttonsContainer}>
				<RectButton style={[styles.favoriteButton, styles.favorited]}>
					<Image source={heartOutlineIcon} />
				</RectButton>
				<RectButton style={styles.contactButton}>
					<Image source={whatsappIcon} />
					<Text style={styles.contactButtonText}>Entrar em contato</Text>
				</RectButton>
			</View>
		</View>
	)
}

export default TeacherItem
