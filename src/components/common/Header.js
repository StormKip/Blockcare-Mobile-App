import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

class Header extends React.Component {
    
   
    state = {
      iconName: 'menu-fold'
    }

    onHamburgerClick = () => {
      if (this.state.iconName === 'menu-fold') {
        this.setState({ iconName: 'menu-unfold' });
      } else {
        this.setState({ iconName: 'menu-fold' });
      }
    }

    render() {
    const { textStyle, viewStyle } = styles;

    return (
 <LinearGradient colors={['#FF0000', '#000000']} style={viewStyle}>
    <TouchableOpacity onPress={this.onHamburgerClick.bind(this)}>
    <AntDesign
    name={this.state.iconName}
    size={20}
    color={'white'}
    style={{ paddingTop: 15 }}
    />
    </TouchableOpacity>
        <Text style={textStyle}>{this.props.headerText}</Text>
        </LinearGradient>
   
    );
  }
}

const styles = {
    viewStyle: {
        // justifyContent: 'center',
        // alignItems: 'center',
        flexDirection: 'row',
        height: 47,
        // paddingTop: 15,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    linearGradient: {
      flex: 1
    },
    textStyle: {
        fontSize: 20,
        color: 'white',
        marginLeft: 25,
        paddingTop: 8
    }
    
};

// Make Component available to other parts
export { Header };
