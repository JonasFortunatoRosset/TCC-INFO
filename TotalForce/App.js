import { StatusBar }              from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator }   from '@react-navigation/stack';

// Importação das páginas
import { HomePage }    from './Screens/HomePage';
import { StorePage }   from './Screens/StorePage';
import { TrainPage }   from './Screens/TrainPage';
import { ConfigPage }  from './Screens/ConfigPage';
import { PaymentPage } from './Screens/PaymentPage';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="HomePage"    component={HomePage}></Stack.Screen>
        <Stack.Screen name="StorePage"   component={StorePage}></Stack.Screen>
        <Stack.Screen name="TrainPage"   component={TrainPage}></Stack.Screen>
        <Stack.Screen name="ConfigPage"  component={ConfigPage}></Stack.Screen>
        <Stack.Screen name="PaymentPage" component={PaymentPage}></Stack.Screen>
      </Stack.Navigator>
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
