const logIn = data => {
  return { type: 'LOG_IN', data };
};

const logOut = () => {
  return {
    type: 'LOG_OUT',
  };
};
const setUserData = data => {
  return {
    type: 'SET_USER_DATA',
    data,
  };
};

const setMBTI = data => {
  return {
    type: 'SET_MBTI',
    data,
  };
};

const userActions = {
  logIn,
  logOut,
  setUserData,
  setMBTI,
};

export default userActions;
