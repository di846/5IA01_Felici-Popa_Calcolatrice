import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './Button';

// Componente che rappresenta la griglia di pulsanti della calcolatrice
export default function Buttons({ expanded, toggleExpanded, handlePress, color_Scheme, size }) {
    return (
        <View style={styles.keypadArea}>
            <View style={styles.grid}>
                {/* Se la modalità espansa è attiva, mostra pulsanti aggiuntivi */}
                {expanded && (
                    <>
                        <View style={styles.row}>
                            <Button label=" MC" type="special" onPress={() => handlePress('MC')} color_Scheme={color_Scheme} size={size}/>
                            <Button label=" M-" type="special" onPress={() => handlePress('M-')} color_Scheme={color_Scheme} size={size}/>
                            <Button label=" (" type="operator" onPress={() => handlePress('(')} color_Scheme={color_Scheme} size={size}/>
                            <Button label=" )" type="operator" onPress={() => handlePress(')')} color_Scheme={color_Scheme} size={size}/>
                        </View>
                        <View style={styles.row}>
                            <Button label=" MR" type="special" onPress={() => handlePress('MR')} color_Scheme={color_Scheme} size={size}/>
                            <Button label=" π" type="special" onPress={() => handlePress('π')} color_Scheme={color_Scheme} size={size}/>
                            <Button label=" xʸ" type="operator" onPress={() => handlePress('^')} color_Scheme={color_Scheme} size={size}/>
                            <Button label=" √" type="operator" onPress={() => handlePress('√')} color_Scheme={color_Scheme} size={size}/>
                        </View>
                    </>
                )}
                {/* Pulsanti principali della calcolatrice */}
                <View style={styles.row}>
                    <Button label=" M+" type="special" onPress={() => handlePress('M+')} color_Scheme={color_Scheme} size={size}/>
                    <Button label=" C" type="special" onPress={() => handlePress('C')} color_Scheme={color_Scheme} size={size}/>
                    <Button label=" CE" type="special" onPress={() => handlePress('CE')} color_Scheme={color_Scheme} size={size}/>
                    <Button label=" ÷" type="operator" onPress={() => handlePress('÷')} color_Scheme={color_Scheme} size={size}/>
                </View>
                <View style={styles.row}>
                    <Button label=" 7" onPress={() => handlePress('7')} color_Scheme={color_Scheme} size={size}/>
                    <Button label=" 8" onPress={() => handlePress('8')} color_Scheme={color_Scheme} size={size}/>
                    <Button label=" 9" onPress={() => handlePress('9')} color_Scheme={color_Scheme} size={size}/>
                    <Button label=" x" type="operator" onPress={() => handlePress('x')} color_Scheme={color_Scheme} size={size}/>
                </View>
                <View style={styles.row}>
                    <Button label=" 4" onPress={() => handlePress('4')} color_Scheme={color_Scheme} size={size}/>
                    <Button label=" 5" onPress={() => handlePress('5')} color_Scheme={color_Scheme} size={size}/>
                    <Button label=" 6" onPress={() => handlePress('6')} color_Scheme={color_Scheme} size={size}/>
                    <Button label=" -" type="operator" onPress={() => handlePress('-')} color_Scheme={color_Scheme} size={size}/>
                </View>
                <View style={styles.row}>
                    <Button label=" 1" onPress={() => handlePress('1')} color_Scheme={color_Scheme} size={size}/>
                    <Button label=" 2" onPress={() => handlePress('2')} color_Scheme={color_Scheme} size={size}/>
                    <Button label=" 3" onPress={() => handlePress('3')} color_Scheme={color_Scheme} size={size}/>
                    <Button label=" +" type="operator" onPress={() => handlePress('+')} color_Scheme={color_Scheme} size={size}/>
                </View>
                <View style={styles.row}>
                    {/* Pulsante per espandere/ridurre la modalità */}
                    <Button label={expanded ? ' ≡' : ' ↕'} type="special" onPress={toggleExpanded} color_Scheme={color_Scheme} size={size}/>
                    <Button label=" 0" onPress={() => handlePress('0')} color_Scheme={color_Scheme} size={size}/>
                    <Button label=" ." type="operator" onPress={() => handlePress('.') } color_Scheme={color_Scheme} size={size}/>
                    <Button label=" =" type="equals" onPress={() => handlePress('=')} color_Scheme={color_Scheme} size={size}/>
                </View>
            </View>
        </View>
    );
}

// Stili per il layout dei pulsanti
const styles = StyleSheet.create({
        row: {
            flexDirection: 'row',
            justifyContent: 'center',
        },
    });