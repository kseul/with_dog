const logIn = data => {
  return {
    type: 'LOG_IN',
    data,
  };
};

const logOut = () => {
  return {
    type: 'LOG_OUT',
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
  setMBTI,
};

export default userActions;
