const initialState = { userNum: 0 };

const userCounterReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_COUNTER':
      return {
        ...prevState,
        userNum: prevState.userNum + 1,
      };
    default:
      return prevState;
  }
};

export default userCounterReducer;
