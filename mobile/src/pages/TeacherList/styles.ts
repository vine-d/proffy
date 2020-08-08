import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F0F0F7',
	},
	teacherList: {
		marginTop: -40,
	},
	searchForm: {
		marginBottom: 16,
	},
	label: {
		color: '#d4c2ff',
		fontFamily: 'Poppins_400Regular',
	},
	input: {
		height: 42,
		backgroundColor: '#fff',
		borderRadius: 8,
		justifyContent: 'center',
		paddingHorizontal: 16,
		marginTop: 4,
		marginBottom: 16,
	},
	inputGroup: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	inputBlock: {
		width: '48%'
	},
	submitButton: {
		backgroundColor: '#04d361',
		flexDirection: 'row',
		height: 56,
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center',
	},
	submitButtonText: {
		fontFamily: 'Archivo_700Bold',
		fontSize: 16,
		color: '#fff',
	}
})

export default styles
