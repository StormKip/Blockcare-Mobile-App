import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class Footer extends React.Component {


  state = {
    iconName: 'menu-fold'
  }

  render() {
    const { textStyle, viewStyle, iconView } = styles;

    return (
      <View style={viewStyle}>
       
        <TouchableOpacity>
        <View style={iconView}>
          <FontAwesome5
          name={'history'}
          size={18}
          style={{ textAlign: 'center' }}
          color={'#697270'}
          />
            <Text style={textStyle}>History</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
        <View style={iconView}>
          <FontAwesome5
          name={'home'}
          size={18}
          style={{ textAlign: 'center' }}
          color={'#697270'}
          />
            <Text style={textStyle}>Home</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
        <View style={iconView}>
          <FontAwesome5
          name={'exchange-alt'}
          size={18}
          style={{ textAlign: 'center' }}
          color={'#697270'}
          />
            <Text style={textStyle}>Exchange</Text>
            </View>
          </TouchableOpacity>
       
      </View>

    );
  }
}

const styles = {
  viewStyle: {
    position: 'absolute',
    left: 0, 
    right: 0, 
    bottom: 0,
    width: '100%',
    backgroundColor: '#F5F5F5',
    // justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row',
    height: 50,
    // paddingTop: 15,
    // shadowOffset: { width: 0, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 2
  },
  iconView: {
    flexDirection: 'column',
    width: 136
  },
  textStyle: {
    fontSize: 15,
    color: '#000000',
    
    textAlign: 'center',
    marginLeft: 20,
    paddingTop: 1
  }

};

// Make Component available to other parts
export { Footer };
