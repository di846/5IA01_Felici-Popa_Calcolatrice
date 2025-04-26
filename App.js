import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, useColorScheme } from 'react-native';
import Display from './src/components/Display';
import Buttons from './src/components/Buttons';
import { colors, buttonDiameter } from './src/components/CalculatorStyles';
import { initialValue, initialMemory, handlePress as utilsHandlePress, toggleExpanded as utilsToggleExpanded } from './src/utils/CalculatorUtils';

export default function App() {
  const colorScheme = useColorScheme() ?? 'light'; // Ottiene il tema attuale
  const theme = colors[colorScheme]; // Imposta i colori in base al tema

  const [value, setValue] = useState(initialValue); // Stato per il valore attuale
  const [memory, setMemory] = useState(initialMemory); // Stato per la memoria
  const [expanded, setExpanded] = useState(false); // Stato per la modalità espansa
  const sizeMultiplier = expanded ? 0.85 : 1; // Fattore di scala per la modalità espansa
  const [prevOperation, setPrevOperation] = useState(""); // Stato per l'operazione precedente

  // Gestisce la pressione dei pulsanti
  const handlePress = label => {
    if (label === "C") {
      setPrevOperation(""); // Resetta l'operazione precedente
    }
    if ((label === "=" && value !== "Error") || (label === 'M+' && value !== "Error") || (label === 'M-' && value !== "Error")) {
      setPrevOperation(value); // Salva il valore come operazione precedente
    }
    utilsHandlePress(label, value, setValue, memory, setMemory); 
  };

  // Alterna la modalità tra compatta e espansa
  const toggleExpanded = () =>
    utilsToggleExpanded(expanded, setExpanded);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      {/* Area del display */}
      <View style={styles.displayArea}>
        <Display value={value} prevOperation={prevOperation} color_Scheme={colorScheme} fontScale={expanded ? 0.85 : 1} />
      </View>
      
      {/* Area dei pulsanti */}
      <View>
        <Buttons expanded={expanded} toggleExpanded={toggleExpanded} handlePress={handlePress} color_Scheme={colorScheme} size={sizeMultiplier} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column', 
    flex: 1, 
    justifyContent: 'flex-end',
    alignItems: 'center', 
  },
  displayArea: {
    width: buttonDiameter * 4.8, // Larghezza dell'area del display
  },
});
