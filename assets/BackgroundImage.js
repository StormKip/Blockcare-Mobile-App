import React from 'react';
import { ImageBackground } from 'react-native';

const BackgroundImage = (props) => {
  return (
    <ImageBackground 
    source={require('./images/background.png')}
    style={{ width: '100%', height: '100%' }}
    >
      {props.children}
    </ImageBackground>
  );
};

export default BackgroundImage;
