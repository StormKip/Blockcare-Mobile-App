import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import RegisterFormReducer from './RegisterFormReducer';
import UserDetailsReducer from './UserDetailsReducer';
import MedicalRecordReducer from './MedicalRecordReducer';
import DoctorReducer from './DoctorReducer';

export default combineReducers({
  auth: AuthReducer,
  medical: MedicalRecordReducer,
  doctor: DoctorReducer,
  userDetails: UserDetailsReducer,
  userForm: RegisterFormReducer,
});
