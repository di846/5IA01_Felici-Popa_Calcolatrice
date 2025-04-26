import React, { useState } from 'react';
import { StyleSheet, View, useColorScheme } from 'react-native'; 
import Button from './src/components/Button';
import { colors, baseStyles } from './src/components/CalculatorStyles';
import Display from './src/components/Display';

export default function App() {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = colors[colorScheme]; 
  const [value, setValue] = useState("0");
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);

  const handlePress = (label) => {
    console.log('Pressed:', label);
    console.log(value);

    if (label !== 'C' && label !== 'M+' && label !== 'M-' && label !== 'MR' && label !== '=' && label !== 'CE' && value !== 'Error') {
      if ((value === '0' && label !== '0') || value !== '0') {
        if (value === '0' && label !== '.' && label !== '÷' && label !== 'x' && label !== '-' && label !== '+' && label !== '^') {
          setValue(label);
          return;
        }
        let oldValue = value;
        setValue(oldValue + label);
        return;
      }
    } else if (label === 'C') {
      setValue("0");
    } else if (value === "Error") {
      return;
    } else if (label === 'CE') {
      if (value.length > 1) {
        setValue(value.slice(0, -1)); 
      } else {
        setValue("0"); 
      }
      return;
    } else if (label === '=') {
      try {
        const result = eval(value.replace(/x/g, '*').replace(/÷/g, '/').replace(/\^/g, '**').replace(/√(\d+(\.\d+)?)/g, 'Math.sqrt($1)'));
        
        if (isNaN(result) || !isFinite(result)) {
          setValue("Error");
          return;
        }
        
        setValue(result.toString());
      }
      catch (error) {
        setValue("Error");
      }
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.displayArea}>
        <Display value={value} color_Scheme={colorScheme} />
      </View>

      <View style={styles.keypadArea}>
        <View style={styles.grid}>

          {expanded && (
            <View style={styles.row}>
              <Button label="MR" type="special" onPress={() => handlePress('MR')} color_Scheme={colorScheme} />
              <Button label="M-" type="special" onPress={() => handlePress('M-')} color_Scheme={colorScheme} />
              <Button label="xʸ" type="operator" onPress={() => handlePress('^')} color_Scheme={colorScheme} />
              <Button label="√" type="operator" onPress={() => handlePress('√')} color_Scheme={colorScheme} />
            </View>
          )}
          <View style={styles.row}>
            <Button label="M+" type="special" onPress={() => handlePress('M+')} color_Scheme={colorScheme} />
            <Button label="C"  type="special" onPress={() => handlePress('C')}  color_Scheme={colorScheme} />
            <Button label="CE" type="special" onPress={() => handlePress('CE')} color_Scheme={colorScheme} />
            <Button label="÷"  type="operator" onPress={() => handlePress('÷')}  color_Scheme={colorScheme} />
          </View>
          <View style={styles.row}>
            <Button label="7" onPress={() => handlePress('7')} color_Scheme={colorScheme} />
            <Button label="8" onPress={() => handlePress('8')} color_Scheme={colorScheme} />
            <Button label="9" onPress={() => handlePress('9')} color_Scheme={colorScheme} />
            <Button label="x" type="operator" onPress={() => handlePress('x')} color_Scheme={colorScheme} />
          </View>
          <View style={styles.row}>
            <Button label="4" onPress={() => handlePress('4')} color_Scheme={colorScheme} />
            <Button label="5" onPress={() => handlePress('5')} color_Scheme={colorScheme} />
            <Button label="6" onPress={() => handlePress('6')} color_Scheme={colorScheme} />
            <Button label="-" type="operator" onPress={() => handlePress('-')} color_Scheme={colorScheme} />
          </View>
          <View style={styles.row}>
            <Button label="1" onPress={() => handlePress('1')} color_Scheme={colorScheme} />
            <Button label="2" onPress={() => handlePress('2')} color_Scheme={colorScheme} />
            <Button label="3" onPress={() => handlePress('3')} color_Scheme={colorScheme} />
            <Button label="+" type="operator" onPress={() => handlePress('+')} color_Scheme={colorScheme} />
          </View>
          <View style={styles.row}>
            <Button label={expanded ? "≡" : "↕"} type="special" onPress={toggleExpanded} color_Scheme={colorScheme}/>
            <Button label="0" onPress={() => handlePress('0')} color_Scheme={colorScheme} />
            <Button label="." type="operator" onPress={() => handlePress('.')} color_Scheme={colorScheme} />
            <Button label="=" type="equals" onPress={() => handlePress('=')} color_Scheme={colorScheme} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',  
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center', 
    marginBottom: baseStyles.buttonBase.margin, 
  },
  displayArea: {
    flex: 1,
    justifyContent: 'flex-end', 
  },
});