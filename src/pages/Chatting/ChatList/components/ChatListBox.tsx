import styled from 'styled-components';
import ChatListLeft from './ChatListLeft';
import ChatListRight from './ChatListRight';
import { ChatListProp } from 'types/type';

const ChatListBox = ({ title, description }: ChatListProp) => {
  return (
    <ChatListContainer>
      <ChatListLeft title={title} description={description} />
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

export default ChatListBox;
