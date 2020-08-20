import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';

import { useFonts, Archivo_400Regular, Archivo_700Bold } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import Routes from './src/routes'
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/auth';

export default function App() {
	let [fontsLoaded] = useFonts({
		Archivo_400Regular,
		Archivo_700Bold,
		Poppins_400Regular,
		Poppins_600SemiBold
	  });

	  if (!fontsLoaded) {
		return <AppLoading />;
	  } else {
		return (
			<NavigationContainer>
				<AuthProvider>
					<Routes />
					<StatusBar style="auto" />
				</AuthProvider>
			</NavigationContainer>
		)
	}
}
