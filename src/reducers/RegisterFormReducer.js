import {
  USER_UPDATE,
  USER_CREATE,
  USER_SAVE_SUCCESS
} from '../actions/types';

const INITAL_STATE = {
  firstName: '',
  lastName: '',
  idNum: '',
  loading: false
};

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case USER_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case USER_CREATE:
      return INITAL_STATE;
    case 'start-register':
      return { ...state, loading: true }; 
    case USER_SAVE_SUCCESS:
      return { ...state, ...INITAL_STATE, loading: false };
    default:
      return state;
  }
};
