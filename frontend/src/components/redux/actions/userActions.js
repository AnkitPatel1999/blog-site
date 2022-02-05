import userActionTypes from "../constants/userActionTypes";

export const signUpSuccess = (emailAndPassword) => ({
  type: userActionTypes.SIGNUP_SUCCESS,
  payload: emailAndPassword,
});

export const signUpFailure = (error) => ({
  type: userActionTypes.SIGNUP_FAILURE,
  payload: error,
});

export const signInSuccess = (user) => ({
  type: userActionTypes.SIGNIN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: userActionTypes.SIGNIN_FAILURE,
  payload: error,
});

export const signOutSuccess = () => ({
  type: userActionTypes.SIGNOUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: userActionTypes.SIGNOUT_FAILURE,
  payload: error,
});

export const signUpPopup = (error) => ({
  type: userActionTypes.SIGNUP_POPUP,
  payload: error,
});
