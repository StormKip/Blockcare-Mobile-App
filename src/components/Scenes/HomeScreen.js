import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Header, Footer } from '../common';
import MedicalList from '../AppComponents/MedicalList';


class HomeScreen extends Component {
  state = {
    medicalRecords: [],
    loaderReady: false
  }
  clickHandler = () => {
    Actions.createMedicalRecord();
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ECEAEA' }}>
        <Header headerText={`Hello ${this.props.userDetails.firstName}`} />
          <View style={{ marginTop: 25 }}>
          <MedicalList /></View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={this.clickHandler}
          style={styles.TouchableOpacityStyle}
        >
          <Image
             source={{
              uri: 'https://aboutreact.com/wp-content/uploads/2018/08/bc72de57b000a7037294b53d34c2cbd1.png',
            }}
            style={styles.FloatingButtonStyle}
          />
        </TouchableOpacity>
        <Footer />
      </View>
    );
  }
}

const styles = {

  textStyle: {
    fontSize: 25,
    color: '#000000',
    borderBottomWidth: 2,
    borderBottomColor: '#000000',
    textAlign: 'center',
    justifyContent: 'center'
  },
  touchableOpacityStyle: {
    //Here is the trick
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
 }, 
 FloatingButtonStyle: {
  resizeMode: 'contain',
  width: 50,
  height: 50,
  //backgroundColor:'black'
},
};

const mapStateToProps = ({ auth }) => {
  const userDetails = auth.userDetails;
  console.log(userDetails);
  return { userDetails };
};


export default connect(mapStateToProps)(HomeScreen);
