const reportedUserId = data => {
  return {
    type: 'SET_REPORTED_USER_ID',
    data,
  };
};

const reportedMessageId = data => {
  return {
    type: 'SET_REPORTED_MESSAGE_ID',
    data,
  };
};

const reportedMessage = data => {
  return {
    type: 'SET_REPORTED_MESSAGE',
    data,
  };
};

const reportContent = data => {
  return {
    type: 'SET_REPORT_CONTENT',
    data,
  };
};

const chatReportActions = {
  reportedUserId,
  reportedMessageId,
  reportedMessage,
  reportContent,
};

export default chatReportActions;
