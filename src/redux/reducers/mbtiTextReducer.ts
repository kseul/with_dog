const initialState = { mbti: '' };

const mbtiTextReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case 'SET_MBTI_TEXT':
      return { ...prevState, mbti: action.data };
    default:
      return prevState;
  }
};

export default mbtiTextReducer;
