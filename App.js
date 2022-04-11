import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'
import HeaderTitle from './src/components/HeaderTitle'
import LoginPage from './src/components/LoginPage'
import LogoContainer from './src/components/LogoContainer'


export default function App() {
  return (
    <View style={styles.container}>
      <LogoContainer/>
      <HeaderTitle label={'Initial Page'} />
      <LoginPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    opacity: 1
  },
})
