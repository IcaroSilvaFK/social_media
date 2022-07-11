import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins';
import {
  DancingScript_400Regular,DancingScript_700Bold
} from '@expo-google-fonts/dancing-script'
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import { theme } from './src/styles/theme';
import Routes from './src/routes';
import { UserContextProvider } from './src/context/UserContextProvider';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_900Black,
    DancingScript_400Regular,
    DancingScript_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <Routes />
      </UserContextProvider>

      <StatusBar style='auto' />
    </ThemeProvider>
  );
}
