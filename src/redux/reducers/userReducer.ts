const initialState = {
  loggedIn: true,
  id: 1,
  name: '안성주',
  nickname: '안론머스크',
  email: 'wkddb1359@naver.com',
  user_type: 'normal',
  status: 'active',
  account_type: 'email',
  thumbnail_url: 'http://thumbnail.url',
  mbti: 'none',
};

const userReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return { ...prevState, loggedIn: action.data };
    case 'LOG_OUT':
      return { ...prevState, loggedIn: action.data };
    case 'SET_MBTI':
      return { ...prevState, mbti: action.data };
    default:
      return prevState;
  }
};

export default userReducer;
