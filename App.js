import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// lets start business area and commented to check changes.
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
  // lets start business area.

}
//this is styling area.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
