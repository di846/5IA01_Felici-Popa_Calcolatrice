import React from 'react';
import { Pressable, Text } from 'react-native';
import { colors, baseStyles, getDynamicStyles, buttonDiameter } from './CalculatorStyles';

// Componente Button che rappresenta un pulsante della calcolatrice
const Button = ({ label, onPress, type = 'number', color_Scheme, size = 1 }) => {
  // Ottiene i colori del tema in base allo schema colore passato
  const themeColors = colors[color_Scheme];
  const buttonType = type;

  // Calcola la dimensione del pulsante in base al diametro e alla dimensione specificata
  const computedSize = buttonDiameter * size;
  const sizeStyle = {
    width: computedSize,
    height: computedSize,
    borderRadius: computedSize / 2, // Rende il pulsante circolare
  };

  return (
    <Pressable
      // Stile del pulsante in base allo stato (premuto o no)
      style={({ pressed }) => [
        baseStyles.buttonBase,
        sizeStyle,   
        getDynamicStyles(themeColors, buttonType, pressed).button,
      ]}
      onPress={onPress} // Funzione chiamata al click del pulsante
    >
      {({ pressed }) => (
        <Text 
          // Stile del testo in base al tipo di pulsante e stato
          style={[
            baseStyles.textBase,
            getDynamicStyles(themeColors, buttonType, pressed).text,
            (buttonType === 'operator' || buttonType === 'special') && baseStyles.operatorText,
          ]}
        >
          {label} {/* Etichetta del pulsante */}
        </Text>
      )}
    </Pressable>
  );
};

export default Button; 
