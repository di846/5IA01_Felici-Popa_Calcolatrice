import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button';
import NumberButton from './src/components/NumberButton';
import OperatorButton from './src/components/OperatorButton';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        <View style={styles.row}>
          <NumberButton number={"7"} />
          <NumberButton number={"8"} />
          <NumberButton number={"9"} />
        </View>
        <View style={styles.row}>
          <NumberButton number={"4"} />
          <NumberButton number={"5"} />
          <NumberButton number={"6"} />
        </View>
        <View style={styles.row}>
          <NumberButton number={"1"} />
          <NumberButton number={"2"} />
          <NumberButton number={"3"} />
        </View>
        <View style={styles.row}>
          <View style={styles.placeholder} />
          <NumberButton number={"0"} />
          <View style={styles.placeholder} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    alignItems: 'center',
    gap: 5, 
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
    marginBottom: 5,
  },
});
