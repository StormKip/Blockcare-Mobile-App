import {
  DOCTOR_ID_CHANGED
} from './types';

export const doctorUpdate = ({ prop, value }) => {
  return {
    type: DOCTOR_ID_CHANGED,
    payload: { prop, value }
  };
};
