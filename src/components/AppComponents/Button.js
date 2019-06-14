import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, style }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, style]}>
      <Text style={textStyle}>
      {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    fontFamily: 'Calibri',
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
    paddingTop: 8,
    paddingBottom: 10
  },
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#FF0011',
    borderRadius: 15,
    borderWidth: 1,
    height: '11%',
    borderColor: '#FF0000',
    marginLeft: '10%',
    marginRight: '10%'
  }
};

export default Button; 
