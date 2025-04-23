// NumberButton.js
import React from 'react';
import { Pressable, Text } from 'react-native';
import {
    colors,
    baseStyles,
    getDynamicStyles,
} from './CalculatorStyles';

const NumberButton = ({ label, onPress, color_Scheme, style: customStyle = {} }) => {
    const themeColors = colors[color_Scheme];
    const buttonType = 'number';

    return (
        <Pressable
            style={({ pressed }) => [
                baseStyles.buttonBase,
                getDynamicStyles(themeColors, buttonType, pressed).button,
                customStyle,
            ]}
            onPress={onPress}
        >
            {({ pressed }) => (
                <Text style={[
                    baseStyles.textBase,
                    getDynamicStyles(themeColors, buttonType, pressed).text,
                ]}>
                    {label}
                </Text>
            )}
        </Pressable>
    );
};

export default NumberButton;
