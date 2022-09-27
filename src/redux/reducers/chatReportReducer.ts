const initialState = {
  id: null,
  messageId: null,
  text: '',
  // reportInput: '',
};

const chatReportReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case 'SET_REPORTED_USER_ID':
      return { ...prevState, id: action.data };

    case 'SET_REPORTED_MESSAGE_ID':
      return { ...prevState, messageId: action.data };

    case 'SET_REPORTED_MESSAGE':
      return { ...prevState, text: action.data };

    // case 'SET_REPORT_CONTENT':
    // return { ...prevState, reportInput: action.data };

    default:
      return prevState;
  }
};

export default chatReportReducer;
