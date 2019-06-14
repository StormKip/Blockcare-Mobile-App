import axios from 'axios';
import {
  FETCH_RECORDS_COMPLETE
} from './types';

export const medicalRecordsFetch = (id) => {
  return (dispatch) => {
    axios({
      method: 'GET',
      url: 'https://us-central1-blockcare-3e340.cloudfunctions.net/getMedicalRecordsForPatient/',
      params: {
        patientId: id
      }
    }).then((response) => {
      dispatch({ type: FETCH_RECORDS_COMPLETE, payload: response.data });
    }).catch((err) => {
      console.log(err);
    });
  };
};
