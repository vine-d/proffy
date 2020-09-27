import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#E6E6F0',
		justifyContent: 'center',
	},

	headerContainer: {
		flex: 1,
		alignContent: 'center',
		alignItems: 'center',
		marginTop: 100,
		marginHorizontal: 50,
	},

	title: {
		fontFamily: 'Poppins_600SemiBold',
		fontSize: 32,
		color: '#32264D',
		lineHeight: 34,
	},

	description: {
		fontFamily: 'Poppins_400Regular',
		fontSize: 14,
		color: '#32264D',
		marginTop: 24,
		lineHeight: 26,
	},

	registerInputsContainer: {
		width: '100%',
		backgroundColor: '#E6E6F0',
		padding: 24
	},

	registerInputsHeader: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 24,
	},

	registerInputsTitle: {
		fontFamily: 'Poppins_600SemiBold',
		color: '#32264D',
		fontSize: 24,
		lineHeight: 34,
	},

	footerButtonText: {
		color: '#9C98A6',
		fontFamily: 'Poppins_400Regular',
		fontSize: 12,
	},

	registerButton: {
		marginVertical: 40,
		backgroundColor: '#04d361',
		height: 58,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 8
	},

	registerButtonText: {
		color: '#FFF',
		fontSize: 16,
		fontFamily: 'Archivo_700Bold'
	},

})

export default styles
