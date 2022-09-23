const initialState = {
  boardData: {},
};

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_BOARD':
      return {
        ...state,
        boardData: action.boardData,
      };
    default:
      return state;
  }
};

export default boardReducer;
