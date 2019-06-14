import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Spinner } from '../common';
import MedicalDetail from './MedicalDetail';
import { medicalRecordsFetch } from '../../actions';

class MedicalList extends Component {
  state = { medicalRecords: [], noMedicalRecords: false };

  componentDidMount() {
    this.props.medicalRecordsFetch(this.props.userDetails.id);
  }

  renderAlbums() {
    return this.props.medicalRecords.map(medicalRecord => 
    <MedicalDetail key={medicalRecord.id} medicalRecord={medicalRecord} />
   );
  }

  renderNoAlbums() {
    return (
      <View style={{ marginTop: 30 }}>
          <Text 
          style={{ fontSize: 25, color: 'black', fontWeight: 'bold', textAlign: 'center' }}
          >No Medical Records Found, click on the + icon to create one</Text>
          <Spinner size="large" />
      </View>
      );
  }

  render() {
    return (
      <ScrollView>
        {this.props.medicalRecords.length === 0 ? this.renderNoAlbums() : this.renderAlbums()}
      </ScrollView>
    );
  }
}
const mapStateToProps = ({ auth, medical }) => {
  const userDetails = auth.userDetails;
  const { medicalRecords, loading } = medical;
  return { userDetails, medicalRecords, loading };
};


export default connect(mapStateToProps, { medicalRecordsFetch })(MedicalList);
