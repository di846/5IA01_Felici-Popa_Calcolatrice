import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ label }) => {
    const [isPressed, setIsPressed] = useState(false);

    return (
        <TouchableOpacity
            style={[styles.button, isPressed && styles.buttonPressed]}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
        >
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonPressed: {
        backgroundColor: '#0056b3',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});

export default Button;
