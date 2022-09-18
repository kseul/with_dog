const initialState = {
  id: 0,
  title: '',
};

const postsReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case 'SET_ROOM':
      return { ...prevState, title: action.data };

    case 'SET_ROOM_ID':
      return { ...prevState, id: action.data };

    default:
      return prevState;
  }
};

export default postsReducer;
