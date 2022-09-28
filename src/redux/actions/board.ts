const GET_BOARDLIST = 'GET_BOARDLIST';
const GET_BOARD = 'GET_BOARD';
const SET_COMMENTS = 'SET_COMMENTS';
const LIKE_PLUS = 'LIKE_PLUS';
const LIKE_MINUS = 'LIKE_MINUS';

const getBoardList = boardData => ({
  type: GET_BOARDLIST,
  boardData,
});

const getBoard = boardData => ({
  type: GET_BOARD,
  boardData,
});

const setComments = boardData => ({
  type: SET_COMMENTS,
  boardData,
});

const likePlus = () => ({
  type: LIKE_PLUS,
});

const likeMinus = () => ({
  type: LIKE_MINUS,
});

const boardActions = {
  getBoardList,
  getBoard,
  setComments,
  likePlus,
  likeMinus,
};

export default boardActions;
