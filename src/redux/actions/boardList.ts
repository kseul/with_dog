const getBoardList = data => ({
  type: 'GET_BOARDLIST',
  data,
});

const boardListActions = {
  getBoardList,
};

export default boardListActions;
