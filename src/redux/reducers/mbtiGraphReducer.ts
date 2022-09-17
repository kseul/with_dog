const initialState = [{ id: null, mbti: '', score: null, layout: '' }];

const mbtiGraphReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case 'SET_MBTI_GRAPH':
      return action.data;
    default:
      return prevState;
  }
};

export default mbtiGraphReducer;
