import { StyleSheet, View, useColorScheme } from 'react-native'; 
import NumberButton from './src/components/NumberButton';
import OperatorButton from './src/components/OperatorButton';
import { colors, baseStyles } from './src/components/CalculatorStyles';

export default function App() {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = colors[colorScheme]; 

  const handlePress = (label) => {
    console.log('Pressed:', label);
    // Logica calcolatrice
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/*Area display*/}

      <View style={styles.keypadArea}>
        <View style={styles.grid}>
          <View style={styles.row}>
          <OperatorButton label={"M+"} type="special" onPress={() => handlePress('M+')} color_Scheme={colorScheme}/>
          <OperatorButton label={"M-"} type="special" onPress={() => handlePress('M-')} color_Scheme={colorScheme}/>
          <OperatorButton label={"MR"} type="special" onPress={() => handlePress('MR')} color_Scheme={colorScheme}/>
          <OperatorButton label={"÷"} type="operator" onPress={() => handlePress('/')} color_Scheme={colorScheme}/> 
          </View>

          <View style={styles.row}>
            <NumberButton label={"7"} onPress={() => handlePress('7')} color_Scheme={colorScheme}/>
            <NumberButton label={"8"} onPress={() => handlePress('8')} color_Scheme={colorScheme}/>
            <NumberButton label={"9"} onPress={() => handlePress('9')} color_Scheme={colorScheme}/>
            <OperatorButton label={"x"} type="operator" onPress={() => handlePress('x')} color_Scheme={colorScheme}/> 
          </View>

          <View style={styles.row}>
            <NumberButton label={"4"} onPress={() => handlePress('4')} color_Scheme={colorScheme}/>
            <NumberButton label={"5"} onPress={() => handlePress('5')} color_Scheme={colorScheme}/>
            <NumberButton label={"6"} onPress={() => handlePress('6')} color_Scheme={colorScheme}/>
            <OperatorButton label={"-"} type="operator" onPress={() => handlePress('-')} color_Scheme={colorScheme}/> 
          </View>

          <View style={styles.row}>
            <NumberButton label={"1"} onPress={() => handlePress('1')} color_Scheme={colorScheme}/>
            <NumberButton label={"2"} onPress={() => handlePress('2')} color_Scheme={colorScheme}/>
            <NumberButton label={"3"} onPress={() => handlePress('3')} color_Scheme={colorScheme}/>
            <OperatorButton label={"+"} type="operator" onPress={() => handlePress('+')} color_Scheme={colorScheme}/> 
          </View>

          <View style={styles.row}>
            <OperatorButton label={"C"} type="special" onPress={() => handlePress('C')} color_Scheme={colorScheme}/>
            <NumberButton label={"0"} onPress={() => handlePress('0')} color_Scheme={colorScheme}/>
            <OperatorButton label={"."} type="operator" onPress={() => handlePress('.')} color_Scheme={colorScheme}/> 
            <OperatorButton label={"="} type="equals" onPress={() => handlePress('=')} color_Scheme={colorScheme}/> 
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20, 
    justifyContent: 'flex-end',  
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center', 
    marginBottom: baseStyles.buttonBase.margin, 
  },
  buttonPlaceholder: {
    width: baseStyles.buttonBase.width,
    height: baseStyles.buttonBase.height,
    margin: baseStyles.buttonBase.margin,
  },
});