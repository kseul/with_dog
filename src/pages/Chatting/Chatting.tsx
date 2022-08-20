import styled from 'styled-components';
import ChatList from './components/ChatList';

const Chatting = () => {
  return (
    <ChattingContainer>
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
    </ChattingContainer>
  );
};

const ChattingContainer = styled.div`
  ${props => props.theme.flex.flexBox('column')}
  height: 100vh;
  background-color: #ececed;
`;

export default Chatting;
