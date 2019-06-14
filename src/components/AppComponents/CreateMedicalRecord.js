/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable global-require */
import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';
import 'firebase/firestore';
import axios from 'axios';
import { medicalRecordsFetch } from '../../actions';
import FloatingLabelInput from './FloatingLabelInput';
import Button from './Button';
import BackgroundImage from '../../../assets/BackgroundImage';
import { Spinner } from '../common';

class CreateMedicalRecord extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      uniqueId: '',
      allergies: '',
      loading: false,
      selectedDoctorId: 'loading',
      doctorIds: ['loading'],
      services: ['a', 'b', 'c', 'd', 'e'],
      selectedService: 'a'
    };
  }

  componentDidMount() {
    const doctorCollection = firebase.firestore().collection('DoctorIds');
    const doctorIds = [];
    doctorCollection.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        doctorIds.push(doc.id);
      });
    }).then(() => {
      this.setState({ doctorIds });
    });
  }


    createMedicalRecord() {
      this.setState({ loading: true });
      axios({
        method: 'POST',
        url: 'https://us-central1-blockcare-3e340.cloudfunctions.net/createMedicalRecord/',
        data: {
          id: this.state.uniqueId,
          initialDoctor: this.state.selectedDoctorId,
          patientId: this.props.userDetails.id,
          smoking: 'false',
          allergies: this.state.allergies
        }
      }).then(() => {
        this.setState({ loading: false });
        this.props.medicalRecordsFetch(this.props.userDetails.id);
        Actions.pop();
      }).catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
    }

    renderButton() {
      if (this.state.loading) {
        return <Spinner size="large" />;
      }
  
      return (
        <Button 
        style={{ marginTop: '5%' }} 
        onPress={this.createMedicalRecord.bind(this)}
        >Create</Button>
    
      );
    }
    render() {
      const doctorItems = this.state.doctorIds.map((s, i) => {
        return <Picker.Item key={i} value={s} label={s} />;
    });
      return (
        <BackgroundImage>
          <View style={{ flex: 1 }}>
            <View style={styles.containerStyle}>
              <Text style={styles.headingStyle}>New Medical Record</Text>
              <View style={{ marginLeft: '15%', marginRight: '15%', marginTop: '5%' }}>
                <FloatingLabelInput
                  label="Unique ID"
                  value={this.state.uniqueId}
                  onChangeText={uniqueId => this.setState({ uniqueId })}
                />
                <FloatingLabelInput
                  label="Allergies seperated by ','"
                  value={this.state.allergies}
                  onChangeText={allergies => this.setState({ allergies })}
                />
                <Text style={{ marginTop: 25 }}>Doctor ID</Text>
                <Picker
                    selectedValue={this.state.selectedDoctorId}
                    onValueChange={(selectedDoctorId) => this.setState({ selectedDoctorId })} >

                    {doctorItems}

                </Picker>
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
    fontSize: 35,
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

const mapStateToProps = ({ auth }) => {
  const userDetails = auth.userDetails;
  console.log(userDetails);
  return { userDetails };
};


export default connect(mapStateToProps, { medicalRecordsFetch })(CreateMedicalRecord);
