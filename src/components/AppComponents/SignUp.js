/* eslint-disable global-require */
import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { userUpdate, userCreate } from '../../actions';
import Button from './Button';
import FloatingLabelInput from './FloatingLabelInput';
import BackgroundImage from '../../../assets/BackgroundImage';
import { Spinner } from '../common';


class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    idNum: '',
  };

  componentWillMount() {
    _.each(this.props.user, (value, prop) => {
      this.props.userUpdate({ prop, value });
    });
  }

  registerPress() {
    const { firstName, lastName, idNum } = this.props;
    this.props.userCreate({ firstName, lastName, idNum });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button 
      style={{ marginTop: '5%' }} 
      onPress={this.registerPress.bind(this)}
      >Register Now</Button>
  
    );
  }

  render() {
    return (
      <BackgroundImage>
        <View style={{ flex: 1 }}>
          <View style={styles.containerStyle}>
            <Text style={styles.headingStyle}>Register</Text>
            <View style={{ marginLeft: '15%', marginRight: '15%', marginTop: '5%' }}>
              <FloatingLabelInput
                label="First Name"
                value={this.props.firstName}
                onChangeText={value => this.props.userUpdate({ prop: 'firstName', value })}
              />
              <FloatingLabelInput
                label="Last Name"
                value={this.props.lastName}
                onChangeText={value => this.props.userUpdate({ prop: 'lastName', value })}
              />
              <FloatingLabelInput
                label="Unique Patient ID"
                value={this.props.idNum}
                onChangeText={value => this.props.userUpdate({ prop: 'idNum', value })}
              />
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
  }
};

const mapStateToProps = (state) => {
  const { firstName, lastName, idNum, loading } = state.userForm;
  return { firstName, lastName, idNum, loading };
};

export default connect(mapStateToProps, { userUpdate, userCreate })(SignUp);
