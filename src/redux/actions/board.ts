const GET_BOARD = 'GET_BOARD';

const getBoard = boardData => ({
  type: GET_BOARD,
  boardData,
});

const boardActions = {
  getBoard,
};

export default boardActions;
