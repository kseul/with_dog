const initialState = {
  userData: {},
};

const userReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return { ...prevState, userData: action.data };
    case 'LOG_OUT':
      return { ...prevState, userData: action.data };
    case 'SET_MBTI':
      return { ...prevState, mbti: action.data };
    default:
      return prevState;
  }
};

export default userReducer;
