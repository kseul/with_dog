const initialState = {};

const boardListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_BOARDLIST':
      return {
        ...state,
        boardListData: action.data,
      };
    default:
      return 'hi';
  }
};

export default boardListReducer;
