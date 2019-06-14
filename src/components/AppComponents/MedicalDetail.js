import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection } from '../common';


const MedicalDetail = ({ medicalRecord }) => {
  const { id, patientId, authorizedDoctors, smoking, allergies } = medicalRecord;
  const {
    headerTextStyle,
    headerContentStyle,
  } = styles;

  return (
    <TouchableOpacity 
    onPress={() => Actions.updateMedicalRecord({ editMedicalRecord: medicalRecord })}
    >
    <Card style={{ marginTop: 8 }}>
      <CardSection >
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>Patient - {patientId}</Text>
          <Text>Document Reference - {id}</Text>
        </View>
        <View>
          <Text>
            Smoking - {smoking.toString()}
          </Text>
        </View>
        <Text style={headerTextStyle}>Allergies</Text>
        {allergies.map((item, key) => (
          <Text key={key} style={styles.TextStyle}> {item} </Text>)
        )}
        <Text style={headerTextStyle}>Authorized Doctors</Text>
        {authorizedDoctors.map((item, key) => (
          <Text key={key} style={styles.TextStyle}> {item} </Text>)
        )}
      </CardSection>
    </Card>
    </TouchableOpacity>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18,
    color: 'black',
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default MedicalDetail;
