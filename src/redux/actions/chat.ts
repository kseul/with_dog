const setRoom = data => {
  return {
    type: 'SET_ROOM',
    data,
  };
};

const setRoomId = data => {
  return {
    type: 'SET_ROOM_ID',
    data,
  };
};

const chatRoomActions = { setRoom, setRoomId };

export default chatRoomActions;
