import styled from 'styled-components';
import ChatListLeft from './ChatListLeft';
import ChatListRight from './ChatListRight';

const ChatList = () => {
  return (
    <ChatListContainer>
      <ChatListLeft />
      <ChatListRight />
    </ChatListContainer>
  );
};

const ChatListContainer = styled.div`
  ${props => props.theme.flex.flexBox('row')}
  max-width: 700px;
  margin-bottom: 25px;
  border-radius: 15px;
`;

export default ChatList;
