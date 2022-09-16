import io from 'socket.io-client';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import TitleBar from './components/TitleBar';
import Messages from './components/Messages';
import Input from './components/Input';
import signInbg from 'assets/images/bg2.png';

let socket;

const ChatRoom = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<any>([]);
  const [currentTime, SetCurrentTime] = useState('');

  // const ENDPOINT = 'localhost:3000';
  const ENDPOINT = 'http://54.180.89.143:8000';

  const storeData = useSelector((state: RootState) => state);
  const { nickname, thumbnail_url, mbti } = storeData.user.userData;
  // const room = storeData.chat;
  const room = 1;
  console.log(nickname);
  console.log(thumbnail_url);
  console.log(mbti);

  /* 현재시간을 얻는 함수 */
  useEffect(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const currentHour = hours > 12 ? `오후 ${hours - 12}` : `오전 ${hours}`;

    SetCurrentTime(`${currentHour}:${minutes}`);
  }, [message]);

  /* 입장시 닉네임과 방을 전달 */
  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit('join', { nickname, room });
    console.log('1) 입장시 nickname, room 넘기기 : ', { nickname, room });
  }, [ENDPOINT]);

  /* 서버로부터 메세지를 받아와서 messages 배열에 추가 <- 초기 입장메세지 + 메세지 */
  useEffect(() => {
    socket.on('add_message', message => {
      console.log('✨add_message로 받아온 데이터: ', message);
      const newMessage = message;
      setMessages(messages => [...messages, newMessage]);
    });
    console.log('add_message 초기실행');
  }, []);

  /* 화면의 Input 값을 입력받고 서버로 message 데이터 전송 */
  const sendMessage = e => {
    e.preventDefault();
    if (message) {
      socket.emit('send_message', message, nickname, room, currentTime, () => {
        setMessage('');
        console.log('✨send_message실행, message 데이터: ', message);
      });
    }
    console.log('send_message실행');
  };

  useEffect(() => {
    return () => {
      socket.close();
    };
  }, []);

  // useEffect(() => {
  //   socket.emit('disconnect', { nickname, room });
  // }, [ENDPOINT]);

  console.log('message state: ', message);
  console.log('messages state: ', messages);

  return (
    <ChatRoomContainer>
      <TitleBar />
      <Messages messages={messages} nickname={nickname} />
      <Input
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </ChatRoomContainer>
  );
};

const ChatRoomContainer = styled.div`
  ${props => props.theme.flex.flexBox('column')}
  justify-content: stretch;
  height: 100vh;
  background-image: url(${signInbg});
  background-size: cover;
  background-repeat: no-repeat;
`;

export default ChatRoom;
