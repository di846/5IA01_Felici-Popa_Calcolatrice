import { StyleSheet, Dimensions } from 'react-native';

// Ottieni la larghezza dello schermo
export const screenWidth = Dimensions.get('window').width;
// Calcola il diametro del pulsante (massimo 80)
export const buttonDiameter = Math.min(screenWidth / 5, 80);

// Definizione dei colori per i temi "dark" e "light"
export const colors = {
  dark: {
    background: '#000000',
    buttonDefaultBg: '#333333',
    buttonDefaultText: '#FFFFFF',
    buttonOperatorBg: '#333333',
    buttonOperatorText: '#FFA500',
    buttonEqualsBg: '#FFA500',
    buttonEqualsText: '#FFFFFF',
    buttonPressedDefaultBg: '#555555',
    buttonPressedOperatorBg: '#555555',
    buttonPressedEqualsBg: '#FFC107',
  },
  light: {
    background: '#F5F5F5',
    buttonDefaultBg: '#FFFFFF',
    buttonDefaultText: '#000000',
    buttonOperatorBg: '#F0F0F0',
    buttonOperatorText: '#FF8C00',
    buttonEqualsBg: '#FF8C00',
    buttonEqualsText: '#FFFFFF',
    buttonPressedDefaultBg: '#E0E0E0',
    buttonPressedOperatorBg: '#D5D5D5',
    buttonPressedEqualsBg: '#FFA500',
  },
};

// Stili di base per i pulsanti e il testo
export const baseStyles = StyleSheet.create({
  buttonBase: {
    width: buttonDiameter,
    height: buttonDiameter,
    borderRadius: buttonDiameter / 2,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.15,
    shadowRadius: 1,
  },
  textBase: {
    fontSize: buttonDiameter / 2.5,
    fontWeight: '500',
  },
  operatorText: {
    fontWeight: '600',
  }
});

// Funzione per ottenere stili dinamici in base al tema, tipo e stato premuto
export const getDynamicStyles = (themeColors, type, pressed) => {
  let backgroundColor = themeColors.buttonDefaultBg; 
  let textColor = themeColors.buttonDefaultText;
  let pressedBackgroundColor = themeColors.buttonPressedDefaultBg; 

  // Modifica i colori in base al tipo di pulsante
  switch (type) {
    case 'operator':
    case 'special':
      backgroundColor = themeColors.buttonOperatorBg;
      textColor = themeColors.buttonOperatorText;
      pressedBackgroundColor = themeColors.buttonPressedOperatorBg;
      break;
    case 'equals':
      backgroundColor = themeColors.buttonEqualsBg;
      textColor = themeColors.buttonEqualsText;
      pressedBackgroundColor = themeColors.buttonPressedEqualsBg;
      break;
    case 'number':
    default:
      break;
  }

  // Restituisce gli stili dinamici per il pulsante e il testo
  return {
    button: {
      backgroundColor: pressed ? pressedBackgroundColor : backgroundColor, // Cambia colore se premuto
    },
    text: {
      color: (pressed && type === 'equals') ? themeColors.buttonDefaultText : textColor, // Cambia colore testo se premuto "="
    },
  };
};
