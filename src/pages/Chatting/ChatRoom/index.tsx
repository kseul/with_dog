import styled from 'styled-components';
import TitleBar from './components/TitleBar';
import Messages from './components/Messages';
import Input from './components/Input';
import signInbg from 'assets/images/bg2.png';

const ChatRoom = () => {
  // 쿼리로 name, room 가져오기

  return (
    <ChatRoomContainer>
      <TitleBar />
      <Messages />
      <Input />
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
