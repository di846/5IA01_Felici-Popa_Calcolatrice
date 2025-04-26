import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { colors } from './CalculatorStyles';

const Display = ({ value = "0", color_Scheme}) => { 
  const textColor = colors[color_Scheme].buttonDefaultText;

  return (
    <View style={[styles.container]}>
      <Text
        style={[styles.text, { color: textColor }]}
        numberOfLines={5} 
        adjustsFontSizeToFit={true} 
      >
        {value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25, 
    paddingBottom: 20,   
    minHeight: 100,       
    justifyContent: 'flex-end', 
  },
  text: {
    fontSize: 72,       
    fontWeight: '300',   
    textAlign: 'right',
  },
});

export default Display;