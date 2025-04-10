import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Button from './Button';

const NumberButton = ({ number, onPress }) => {
    const [isPressed, setIsPressed] = useState(false);

    return (
        <TouchableOpacity
            style={[styles.button, isPressed && styles.buttonPressed ]}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            //onPress={onPress}
        >
            <Text style={[styles.text, isPressed && styles.textPressed]}>{number}</Text>
            </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5,
        margin: 5,
        alignItems: 'center',
    },
    buttonPressed: {
        backgroundColor: 'gray',
    },
    text: {
        color: 'white',
        fontSize: 16,
    },

    textPressed: {
        color: 'black',
    },
});

export default NumberButton;
