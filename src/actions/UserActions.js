import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER,
  USER_UPDATE,
  USER_CREATE,
  USER_IDS_UPDATED
} from './types';


export const userLogin = ({ userName }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    let data;
  axios({
    method: 'GET',
    url: 'https://us-central1-blockcare-3e340.cloudfunctions.net/getPatientById/',
    params: { 
      id: userName
     }
}).then((response) => {
     data = response.data;
     dispatch({ 
      type: LOGIN_USER_SUCCESS, 
      payload: data 
    });
});
}; 
};

export const userUpdate = ({ prop, value }) => {
  return {
    type: USER_UPDATE,
    payload: { prop, value }
  };
};

export const userIdsUpdated = () => {
  return (dispatch) => {
    const userCollection = firebase.firestore().collection('UserIds');
    
    const userIds = [];
    userCollection.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        userIds.push(doc.id);
      });
    }).then(() => {
      dispatch({ type: USER_IDS_UPDATED, payload: userIds });
    });
  };
  };

export const userCreate = ({ firstName, lastName, idNum }) => {
  return (dispatch) => {
    dispatch({ type: 'start-register' });
    axios({
      method: 'POST',
      url: 'https://us-central1-blockcare-3e340.cloudfunctions.net/createPatient/',
      data: {
        id: idNum,
        firstName,
        lastName,
      }
    }).then(() => {
      firebase.firestore().collection('UserIds').doc(idNum).set({
        exists: true
      });
    }).then(() => {
        dispatch({ type: USER_CREATE });
        userIdsUpdated();
        Actions.pop();
      });
  };
};
