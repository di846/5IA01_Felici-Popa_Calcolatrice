import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, useColorScheme } from 'react-native';
import Display from './src/components/Display';
import Buttons from './src/components/Buttons';
import { colors } from './src/components/CalculatorStyles';
import { initialValue, initialMemory, handlePress as utilsHandlePress, toggleExpanded as utilsToggleExpanded } from './src/utils/CalculatorUtils';

export default function App() {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = colors[colorScheme];

  const [value, setValue] = useState(initialValue);
  const [memory, setMemory] = useState(initialMemory);
  const [expanded, setExpanded] = useState(false);

  const sizeMultiplier = expanded ? 0.85 : 1;

  const handlePress = label =>
    utilsHandlePress(label, value, setValue, memory, setMemory);

  const toggleExpanded = () =>
    utilsToggleExpanded(expanded, setExpanded);

  return (
    <SafeAreaView  style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent"/>

      <View style={[styles.displayArea, { flex: expanded ? 0.6 : 1 }]}>
        <Display value={value} color_Scheme={colorScheme} fontScale={expanded ? 0.85 : 1}/>
      </View>
      
      <View style={styles.keyPadArea}>
        <Buttons expanded={expanded} toggleExpanded={toggleExpanded} handlePress={handlePress} color_Scheme={colorScheme} size={sizeMultiplier} />
      </View>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  displayArea: {
    justifyContent: 'flex-end',
  },
  keyPadArea: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
