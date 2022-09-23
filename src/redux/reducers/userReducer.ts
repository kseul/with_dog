const initialState = {
  LoggedIn: false,
  userData: {
    account_type: '',
    email: '',
    mbti: '',
    name: '',
    nickname: '',
    status: '',
    thumbnail_url: '',
  },
};

const userReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case 'USER_ACCESS':
      return { ...prevState, LoggedIn: action.data };
    case 'HANDLE_USER_DATA':
      return { ...prevState, userData: action.data };
    case 'SET_MBTI':
      return {
        ...prevState,
        userData: { ...prevState.userData, mbti: action.data },
      };
    case 'CHANGE_NICKNAME':
      return {
        ...prevState,
        userData: { ...prevState.userData, nickname: action.data },
      };
    case 'SET_USER_IMAGE':
      return {
        ...prevState,
        userData: { ...prevState.userData, thumbnail_url: action.data },
      };
    default:
      return prevState;
  }
};

export default userReducer;
