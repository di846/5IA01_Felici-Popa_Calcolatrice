import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button';
import NumberButton from './src/components/NumberButton';
import OperatorButton from './src/components/OperatorButton';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        <NumberButton number={"1"} />
        <NumberButton number={"2"} />
        <NumberButton number={"3"} />
        <NumberButton number={"4"} />
        <NumberButton number={"5"} />
        <NumberButton number={"6"} />
        <NumberButton number={"7"} />
        <NumberButton number={"8"} />
        <NumberButton number={"9"} />
        <NumberButton number={"0"} />
      </View>
      <StatusBar style="auto" />
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
    width: 150, 
    justifyContent: 'center',
  },
});
