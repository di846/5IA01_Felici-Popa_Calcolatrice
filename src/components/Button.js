import React from 'react';
import { Pressable, Text } from 'react-native';
import { colors, baseStyles, getDynamicStyles, buttonDiameter } from './CalculatorStyles';

const Button = ({ label, onPress, type = 'number', color_Scheme, size = 1 }) => {
  const themeColors = colors[color_Scheme];
  const buttonType = type;

  const computedSize = buttonDiameter * size;
  const sizeStyle = {
    width: computedSize,
    height: computedSize,
    borderRadius: computedSize / 2,
  };

  return (
    <Pressable
      style={({ pressed }) => [
        baseStyles.buttonBase,
        sizeStyle,   
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
