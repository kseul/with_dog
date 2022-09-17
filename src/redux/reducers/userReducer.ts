const initialState = {
  LoggedIn: false,
  userData: {
    mbti: 'none',
  },
};

const userReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return { ...prevState, LoggedIn: action.data };
    case 'LOG_OUT':
      return { ...prevState };
    case 'SET_USER_DATA':
      return { ...prevState, userData: action.data };
    case 'SET_MBTI':
      return { ...prevState, userData: action.data };
    default:
      return prevState;
  }
};

export default userReducer;
