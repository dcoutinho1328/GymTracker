import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'
import MainTitle from './src/components/MainTitle'

export default function App() {
  return (
    <View style={styles.container}>
      <MainTitle label={'Test text'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
