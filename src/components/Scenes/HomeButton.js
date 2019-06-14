import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const HomeButton = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <LinearGradient colors={['#FF0000', '#000000']} style={{ borderRadius: 5 }}>
      <Text style={textStyle}>
      {children}
      </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    height: 45,
    alignSelf: 'stretch',
    borderRadius: 5,
    marginTop: 40,
    marginLeft: '5%',
    marginRight: '5%'
  }
};

export default HomeButton;

