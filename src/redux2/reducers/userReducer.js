import types from "../types";

const initialState = {
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER__START_CHECK_LOGGED_USER:
      return { ...state, loading: true };
    case types.USER__SET_INFO:
      return { ...state, ...action.payload };
    case types.USER__RESET_INFO:
      return initialState;

    case types.USER__ERROR_RESET:
      return { ...state, error: null };

    case types.USER__START_PASSWORD_RECOVER:
      return { ...state, loading: true };
    case types.USER__SUCCESS_PASSWORD_RECOVER:
      return { ...state, loading: false };
    case types.USER__FAIL_PASSWORD_RECOVER:
      return { ...state, loading: false, error: action.payload };

    case types.USER__START_CREATE_NEW_USER:
      return { ...state, loading: true };
    case types.USER__SUCCESS_CREATE_NEW_USER:
      return { ...state, loading: false };
    case types.USER__FAIL_CREATE_NEW_USER:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default userReducer;