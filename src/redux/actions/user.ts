const userAccess = data => {
  return { type: 'USER_ACCESS', data };
};

const handleUserData = data => {
  return {
    type: 'HANDLE_USER_DATA',
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
  userAccess,
  handleUserData,
  setMBTI,
};

export default userActions;
