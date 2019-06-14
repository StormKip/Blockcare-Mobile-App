import {
  USER_LOGIN,
  USER_DETAILS,
  USER_IDS_UPDATED
} from '../actions/types';

const INITAL_STATE = {
  userName: '',
  allUserIds: ['loading'],
  userDetails: {},
  loading: false
};

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, loading: true, userName: action.payload };
    case USER_DETAILS:
      return { ...state, userDetails: action.payload };
    case USER_IDS_UPDATED:
      return { ...state, allUserIds: action.payload };  
    default:
      return state;
  }
};
