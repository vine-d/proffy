import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#8257e5',
		justifyContent: 'center',
	},

	background: {
		flex: 1,
		justifyContent: 'center',
		padding: 80,
	},

	logo: {
		resizeMode: 'contain',
		width: 160,
		height: 47,
	},

	description: {
		fontFamily: 'Poppins_400Regular',
		fontSize: 16,
		color: '#d4c2ff',
		marginTop: 24,
		maxWidth: 200,
		lineHeight: 26,
	},

	loginInputsContainer: {
		width: '100%',
		backgroundColor: '#E6E6F0',
		padding: 24
	},

	loginInputsHeader: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 24,
	},

	loginInputsTitle: {
		fontFamily: 'Archivo_700Bold',
		color: '#32264D',
		fontSize: 24,
		lineHeight: 34,
	},

	headerButtonText: {
		color: '#8257E5',
		fontFamily: 'Poppins_400Regular',
		fontSize: 12,
	},

	remember: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},

	checkBoxLabel: {
		color: '#9C98A6',
		fontFamily: 'Poppins_400Regular',
		fontSize: 12,
	},

	footerButtonText: {
		color: '#9C98A6',
		fontFamily: 'Poppins_400Regular',
		fontSize: 12,
	},

	input: {
		height: 42,
		backgroundColor: '#FAFAFC',
		borderRadius: 2,
		justifyContent: 'center',
		paddingHorizontal: 16,
		marginVertical: 1,
	},

	loginInputsFooter:{
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 24,
	},

	loginButton: {
		marginVertical: 40,
		backgroundColor: '#04d361',
		height: 58,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 8
	},

	loginButtonText: {
		color: '#FFF',
		fontSize: 16,
		fontFamily: 'Archivo_700Bold'
	},

})

export default styles
