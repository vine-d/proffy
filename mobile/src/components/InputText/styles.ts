import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

	container: {
		height: 64,
		backgroundColor: '#FAFAFC',
		borderWidth: 1,
		borderColor: '#E6E6F0',
		borderRadius: 8,
		justifyContent: 'center',
	},
	containerTop: {
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0
	},
	containerBottom: {
		borderTopLeftRadius: 0,
		borderTopRightRadius: 0
	},

	input: {
		fontFamily: 'Poppins_400Regular',
		fontSize: 14,
		marginLeft: 18,
	},
})

export default styles
