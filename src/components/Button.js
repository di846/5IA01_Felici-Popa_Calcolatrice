import React from 'react';
import { Pressable, Text } from 'react-native';
import { colors, baseStyles, getDynamicStyles } from './CalculatorStyles';

const Button = ({ label, onPress, type = 'number', color_Scheme }) => {
    const themeColors = colors[color_Scheme];
    const buttonType = type;

    return (
        <Pressable
            style={({ pressed }) => [
                baseStyles.buttonBase,
                getDynamicStyles(themeColors, buttonType, pressed).button,
            ]}
            onPress={onPress}
        >
            {({ pressed }) => (
                <Text style={[
                    baseStyles.textBase,
                    getDynamicStyles(themeColors, buttonType, pressed).text,
                    (buttonType === 'operator' || buttonType === 'special') && baseStyles.operatorText,
                ]}>
                    {label}
                </Text>
            )}
        </Pressable>
    );
};

export default Button;
