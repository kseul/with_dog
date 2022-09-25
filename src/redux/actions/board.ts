const GET_BOARDLIST = 'GET_BOARDLIST';
const GET_BOARD = 'GET_BOARD';
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

const likePlus = () => ({
  type: LIKE_PLUS,
});

const likeMinus = () => ({
  type: LIKE_MINUS,
});

const boardActions = {
  getBoardList,
  getBoard,
  likePlus,
  likeMinus,
};

export default boardActions;
