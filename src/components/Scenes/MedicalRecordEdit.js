
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text, View } from 'react-native';
import axios from 'axios';
import { Card, CardSection, Button, Confirm } from '../common';
import { doctorUpdate } from '../../actions';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

let medicalRecord;
class MedicalRecordEdit extends Component {
    constructor(props) {
      super(props);
      this.state = {
        showModal: false,
        revokeDoctor: this.props.editMedicalRecord.authorizedDoctors[0],
        doctorIds: [],
        selectedDoctor: 'loading'
        };
      }
  
  componentWillMount() {
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

  onButtonPress() {
    this.setState({ showModal: !this.state.showModal });
  }

  onDoctorChanged(value) {
    this.setState({ revokeDoctor: value });
  }

  onGrantPress() {
      axios({
      method: 'POST',
      url: 'https://us-central1-blockcare-3e340.cloudfunctions.net/grantAccess/',
      data: {
        medicalId: medicalRecord.id,
        doctorId: this.state.selectedDoctor,
      }
    }).then(() => {
        Actions.pop();
    }).catch((err) => {
      console.log(err);
    });
  }

  onRemovePress() {
        // axios({
    //   method: 'POST',
    //   url: 'https://us-central1-blockcare-3e340.cloudfunctions.net/grantAccess/',
    //   data: {
    //     medicalId: medicalRecord.id,
    //     doctorId: this.state.selectedDoctorRevoke,
    //   }
    // }).then(() => {
    //     Actions.pop();
    // }).catch((err) => {
    //   console.log(err);
    // });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  onAccept() {
    console.log(medicalRecord.id, this.state.revokeDoctor);
    // axios({
    //   method: 'POST',
    //   url: 'https://us-central1-blockcare-3e340.cloudfunctions.net/grantAccess/',
    //   data: {
    //     medicalId: medicalRecord.id,
    //     doctorId: this.state.selectedDoctorRevoke,
    //   }
    // }).then(() => {
    //     Actions.pop();
    // }).catch((err) => {
    //   console.log(err);
    // });
  }
  onTextPress() {
    // const { uid } = this.props.employee;
    // this.props.employeeDelete({ uid });
  }

  render() {
    medicalRecord = this.props.editMedicalRecord;
    const authorizedDoctor = medicalRecord.authorizedDoctors.map((s, i) => {
      return <Picker.Item key={i} value={s} label={s} />;
  });

  const doctorList = this.state.doctorIds.map((s, i) => {
    return <Picker.Item key={i} value={s} label={s} />;
});
    return (
      <Card>
        <CardSection style={{ justifyContent: 'flex-start', flexDirection: 'row' }}>

          <View style={{ marginTop: '10%', width: '100%' }}>
                    <Text style={{ fontSize: 20, color: 'black' }}>Grant Access</Text>
                    <Picker
                      selectedValue={this.state.selectedDoctor}
                      onValueChange={(value) => this.setState({ selectedDoctor: value })}
                     >

                  {doctorList}

                    </Picker>
                    <CardSection style={{ justifyContent: 'flex-start', flexDirection: 'row', width: 350 }}>
                    <Button onPress={this.onGrantPress.bind(this)}>
                    Grant Access
                  </Button>
                    </CardSection>
              
          </View>

          <View style={{ marginTop: '10%', width: '100%' }}>
                    <Text style={{ fontSize: 20, color: 'black' }}>Grant Access</Text>
                     <Picker
                      selectedValue={this.state.selectedDoctor}
                      onValueChange={(value) => this.setState({ selectedDoctor: value })}
                     >

                  {doctorList}

                    </Picker>
                    <CardSection style={{ justifyContent: 'flex-start', flexDirection: 'row', width: 350 }}>
                    <Button onPress={this.onGrantPress.bind(this)}>
                    Remove User
                  </Button>
                    </CardSection>
              
          </View>
          
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>

    );
  }
}

const mapStateToProps = ({ auth, medical }) => {
  const userDetails = auth.userDetails;
  const { medicalRecords } = medical;
  return { userDetails, medicalRecords };
};

export default connect(mapStateToProps, { doctorUpdate })(MedicalRecordEdit);
