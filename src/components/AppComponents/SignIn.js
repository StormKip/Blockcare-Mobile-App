/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable global-require */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Picker } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { userNameChanged, loginUser, userIdsUpdated } from '../../actions';
import Button from './Button';
import BackgroundImage from '../../../assets/BackgroundImage';
import { Spinner } from '../common/Spinner';

class SignIn extends Component {
 

    state = {
      selectedUserId: 'loading',
      userIds: ['loading'],
      services: ['a', 'b', 'c', 'd', 'e'],
      selectedService: 'a'
    };


    componentDidMount() {
      this.props.userIdsUpdated();
    }

    onUserNameChanged(text) {
      this.props.userNameChanged(text);
    }
  
    onLoginPress() {
      const userName = this.props.userName;
      this.props.loginUser({ userName });
    }

    renderButton() {
      if (this.props.loading) {
        return <Spinner size="large" />;
      }
  
      return (
        <Button
        style={{ marginTop: '20%' }}
        onPress={this.onLoginPress.bind(this)}
      >LOG IN</Button>
    
      );
    }


  render() {
    const { 
      containerStyle, 
      headingStyle, 
      orViewStyle, 
      orTextStyle, 
      iconContainer, 
      iconFacebookButton, 
      iconGoogleButton, 
      registerTextView
    } = styles;
    const userItems = this.props.allUserIds.map((s, i) => {
      return <Picker.Item key={i} value={s} label={s} />;
  });
    return (
      <BackgroundImage>
        <View style={{ flex: 1 }}>
          <View style={containerStyle}>

            <Text style={headingStyle}>Login</Text>
            <View style={{ marginLeft: '15%', marginRight: '15%', marginTop: '10%' }}>
          
            <Picker
                    selectedValue={this.props.userName}
                    onValueChange={this.onUserNameChanged.bind(this)} >

                    {userItems}

                </Picker>
          
            </View>

          
            <View style={orViewStyle}>
              <Text style={orTextStyle}>OR</Text>
            </View>
            
            <View style={iconContainer}>
          
              <TouchableOpacity onPress={this.onFacebookPress}>
                <Image
                  style={iconFacebookButton}
                  source={require('../../../assets/images/facebookIcon.png')}
                />
              </TouchableOpacity>
          
              <TouchableOpacity>
                <Image
                  style={iconGoogleButton}
                  source={require('../../../assets/images/googleIcon.png')}
                />
              </TouchableOpacity>
          
            </View>
            {this.renderButton()}
            <View
              style={{
                marginTop: 10,
                borderBottomColor: '#707070',
                borderBottomWidth: 1,
                marginLeft: '10%',
                marginRight: '10%'
              }}
            />
          </View>
          
          <View style={registerTextView}>
          
            <Text style={{ fontFamily: 'Calibri', fontSize: 16, color: '#000000' }}>
              Don't have an account?
            </Text>
          
            <TouchableOpacity onPress={() => { Actions.register(); }}>
              <Text
                style={{
                  fontFamily: 'Calibri',
                  fontSize: 18,
                  color: '#FF0011',
                  fontWeight: 'bold',
                  textAlign: 'center'
                }}
              >
                REGISTER
              </Text>
            </TouchableOpacity>

          </View>
        </View>
      </BackgroundImage>
    );
  }
}
const styles = {
  containerStyle: {
    marginTop: '35%',
    marginLeft: '10%',
    width: '79%',
    height: '66.5%',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    border: '1px solid'
  },
  headingStyle: {
    fontFamily: 'TimesNewRomanPS-BoldMT',
    fontSize: 57,
    color: '#000000',
    textAlign: 'center',
    flexDirection: 'column',
    alignItems: 'center',

  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#FF0000',
    fontWeight: '400',
  },
  orTextStyle: {
    alignSelf: 'center',
    fontFamily: 'Calibri',
    color: '#000000',
    fontSize: 13,
    fontWeight: '800',
    paddingTop: 8,
    paddingBottom: 10
  },
  orViewStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#E3E3E3',
    borderRadius: 12,
    borderWidth: 1,
    height: '11%',
    borderColor: '#E3E3E3',
    marginTop: 8,
    marginLeft: '43%',
    marginRight: '43%'

  },
  iconContainer: {
    marginTop: 8,
    marginLeft: '37%',
    flexDirection: 'row',
    height: 28

  },
  iconFacebookButton: {
    width: 28,
    height: 28
  },
  iconGoogleButton: {
    width: 23,
    height: 23,
    marginLeft: 25.5,
    marginTop: 3
  },
  registerTextView: {
    marginTop: 10,
    marginLeft: '30%',
    width: 180
  },
  pickerSelectStyles: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'eggplant',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
};

const mapStateToProps = ({ auth, userDetails }) => {
  const { userName, error, loading } = auth;
  const { allUserIds } = userDetails;
  console.log(auth, userDetails)
  return {
    userName,
    error,
    loading,
    allUserIds
  };
};
export default connect(mapStateToProps, {
 userNameChanged, loginUser, userIdsUpdated
})(SignIn);
