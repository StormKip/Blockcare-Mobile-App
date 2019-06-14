import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  USER_NAME_CHANGED
} from './types';

// export const userDetailsChanged = (data) => {
//   return {
//     type: USER_DETAILS,
//     payload: data
//   };
// };

export const userNameChanged = (text) => {
  return {
    type: USER_NAME_CHANGED,
    payload: text
  };
};


export const loginUser = ({ userName }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    
    axios({
      method: 'GET',
      url: 'https://us-central1-blockcare-3e340.cloudfunctions.net/getPatientById/',
      params: { 
        id: userName
       } })
       .then((response) => {
        loginUserSuccess(dispatch, response.data);
       }).catch(() => {
         loginUserFail(dispatch);
       });
  };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({ 
    type: LOGIN_USER_SUCCESS, 
    payload: user 
  });
  
  Actions.main();
};

const loginUserFail = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAIL
  });
};
