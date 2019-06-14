import {
  FETCHING_RECORDS,
  FETCH_RECORDS_COMPLETE
} from '../actions/types';

const INITAL_STATE = {
  medicalRecords: [],
  loading: false
};

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case FETCHING_RECORDS:
      return { ...state, loading: true };
    case FETCH_RECORDS_COMPLETE:
      return { ...state, medicalRecords: action.payload }; 
    default:
      return state;
  }
};
