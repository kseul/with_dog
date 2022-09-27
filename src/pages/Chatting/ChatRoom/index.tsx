import styled from 'styled-components';
import io from 'socket.io-client';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { useCookies } from 'react-cookie';
import TitleBar from './components/TitleBar';
import Messages from './components/Messages';
import Input from './components/Input';
import ChatReportModal from '../ChatReportModal';
import { MessagesProps } from 'pages/Chatting/type';
import signInbg from 'assets/images/bg2.png';
import { useNavigate } from 'react-router-dom';

interface UserDataProps {
  account_type?: string;
  email?: string;
  mbti?: string;
  name?: string;
  nickname?: string;
  status?: string;
  thumbnail_url?: string;
  user_type?: string;
  id?: number;
}

interface ChatRoomProps {
  room?: number;
}

let socket;

const ChatRoom = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<MessagesProps[]>([]);
  const [currentTime, SetCurrentTime] = useState('');
  const [isShowModal, setIsShowModal] = useState(false);

  const navigate = useNavigate();

  // const ENDPOINT = 'localhost:3000';
  const ENDPOINT = 'http://54.180.89.143:8000';

  const [cookies] = useCookies(['userToken']);

  const storeData = useSelector((state: RootState) => state);
  const { nickname, mbti, thumbnail_url, id }: UserDataProps =
    storeData.user.userData;
  const room: ChatRoomProps = storeData.chat.id;

  useEffect(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const currentHour = hours > 12 ? `오후 ${hours - 12}` : `오전 ${hours}`;

    SetCurrentTime(`${currentHour}:${minutes}`);
  }, [message]);

  useEffect(() => {
    socket = io(ENDPOINT, {
      auth: {
        token: cookies.userToken,
        userId: id,
      },
    });
    socket.emit('join', { nickname, room });
  }, [ENDPOINT]);

  useEffect(() => {
    socket.on('add_message', message => {
      const newMessage: MessagesProps = message;
      setMessages(messages => [...messages, newMessage]);
    });
  }, []);

  const sendMessage = e => {
    e.preventDefault();
    if (message) {
      socket.emit(
        'send_message',
        message,
        nickname,
        room,
        currentTime,
        mbti,
        thumbnail_url,
        id,
        () => {
          setMessage('');
        }
      );
    }
  };

  useEffect(() => {
    socket.on('connect_error', data => {
      if (data.message === 'invalid user') {
        socket.close();
        navigate('/');
      }
    });
    return () => {
      socket.close();
    };
  }, []);

  return (
    <ChatRoomContainer>
      <TitleBar />
      <Messages
        messages={messages}
        nickname={nickname}
        setIsShowModal={setIsShowModal}
      />
      <Input
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
      {isShowModal && <ChatReportModal setIsShowModal={setIsShowModal} />}
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
