const initialState = '';

const postsReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case 'SET_ROOM':
      return action.data;
    default:
      return prevState;
  }
};

export default postsReducer;
