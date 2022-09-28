const initialState = {
  boardList: [],
  boardData: {
    comments_list: [],
    content: '',
    created_at: '',
    id: 0,
    image_url: '',
    is_liked: false,
    post_likes_count: 0,
    subject: '',
    user_id: 0,
    user_nickname: '',
    user_thumbnail: '',
  },
};

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_BOARDLIST':
      return {
        ...state,
        boardList: [...state.boardList, ...action.boardData],
      };
    case 'GET_BOARD':
      return {
        ...state,
        boardData: action.boardData,
      };
    case 'SET_COMMENTS':
      return {
        ...state,
        boardData: {
          ...state.boardData,
          comments_list: [...state.boardData.comments_list, action.boardData],
        },
      };
    case 'LIKE_PLUS':
      return {
        ...state,
        boardData: {
          ...state.boardData,
          post_likes_count: state.boardData.post_likes_count + 1,
          is_liked: (state.boardData.is_liked = true),
        },
      };
    case 'LIKE_MINUS':
      return {
        ...state,
        boardData: {
          ...state.boardData,
          post_likes_count: state.boardData.post_likes_count - 1,
          is_liked: (state.boardData.is_liked = false),
        },
      };
    default:
      return state;
  }
};

export default boardReducer;
