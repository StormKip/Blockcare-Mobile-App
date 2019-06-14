import {
  DOCTOR_ID_CHANGED
} from '../actions/types';

const INITAL_STATE = {
  revokeDoctorId: 'loading',
  grantDoctorID: 'loading'
};

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case DOCTOR_ID_CHANGED:
    return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
