import userActionTypes from "./../constants/userActionTypes";

const initialState = {
  currentUser: null,
  error: null,
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case userActionTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        error: null,
      };
    case userActionTypes.SIGNOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };
    case userActionTypes.SIGNIN_FAILURE:
    case userActionTypes.SIGNOUT_FAILURE:
    case userActionTypes.SIGNUP_FAILURE:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
