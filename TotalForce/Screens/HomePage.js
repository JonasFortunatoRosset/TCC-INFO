import { StatusBar }              from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// tela treino/suplementos/configs/pagamentos => navegacao

export default function HomePage() {
  return (
    <View style={styles.container}>
        <View></View>
        <View></View>
        <View></View>
        <View></View>
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
