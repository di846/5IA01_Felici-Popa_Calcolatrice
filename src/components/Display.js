import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from './CalculatorStyles';

// Componente Display per mostrare il valore corrente e l'operazione precedente
const Display = ({ value = "0", prevOperation = "", color_Scheme, fontScale }) => {
    // Colore del testo basato sullo schema di colori
    const textColor = colors[color_Scheme].buttonDefaultText;

    // Funzione per calcolare dinamicamente il numero di righe
    const calculateNumberOfLines = () => {
        return Math.min(Math.ceil(value.length / 10), 6);
    };

    const numberOfLines = calculateNumberOfLines();

    return (
        <View style={[styles.container]}>
            {/* Mostra l'operazione precedente se esiste e il valore non è "Error" */}
            {prevOperation !== "" && value !== "Error" && (
                <Text style={[styles.prevOperation, { color: textColor }]}>
                    {prevOperation}
                </Text>
            )}
            {/* Mostra il valore corrente con dimensione del font scalabile */}
            <Text
                style={[styles.text, { color: textColor, fontSize: styles.text.fontSize * fontScale }]}
                numberOfLines={numberOfLines}
                adjustsFontSizeToFit={true}
            >
                {value}
            </Text>
        </View>
    );
};

// Stili per il componente Display
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25, 
        minHeight: 100, 
    },
    prevOperation: {
        fontSize: 28, 
        fontWeight: '200', 
        textAlign: 'right',
        opacity: 0.7, 
    },
    text: {
        fontSize: 72, 
        textAlign: 'right', 
        fontWeight: '300', 
    },
});

export default Display;