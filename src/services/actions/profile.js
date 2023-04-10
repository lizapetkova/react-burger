import {changeProfileRequest} from '../../utils/api';

export const PROFILE_CHANGE_NAME = 'PROFILE_CHANGE_NAME';
export const PROFILE_CHANGE_EMAIL = 'PROFILE_CHANGE_EMAIL';
export const PROFILE_CHANGE_PASSWORD = 'PROFILE_CHANGE_PASSWORD';
export const PROFILE_LOADING = 'PROFILE_LOADING';
export const PROFILE_SUCCESS = 'PROFILE_SUCCESS';
export const PROFILE_FAILED = 'PROFILE_FAILED';
export const PROFILE_CANCEL_CHANGES = 'PROFILE_CANCEL';

export const startChangedProfile = (formData) => dispatch => {
  dispatch({
    type: PROFILE_LOADING,
  })

  changeProfileRequest(formData).then(response => {
    dispatch({
      type: PROFILE_SUCCESS,
    })
  }).catch(error => {
    dispatch({
      type: PROFILE_FAILED,
      error: error,
    })
  })
}

export function changeName(name, valid) {
  return {
    type: PROFILE_CHANGE_NAME,
    name: name,
    valid: valid,
  }
}

export function changeEmail(email, valid) {
  return {
    type: PROFILE_CHANGE_EMAIL,
    email: email,
    valid: valid,
  }
}

export function changePassword(password, valid) {
  return {
    type: PROFILE_CHANGE_PASSWORD,
    password: password,
    valid: valid,
  }
}

export function cancelChanges() {
  return {
    type: PROFILE_CANCEL_CHANGES,
  }
}