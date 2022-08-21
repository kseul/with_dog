import styled from 'styled-components';
import ChatListLeft from './ChatListLeft';
import ChatListRight from './ChatListRight';
import { ChatListProp } from 'types/type';

const ChatListBox = ({ Image, title, description }: ChatListProp) => {
  return (
    <ChatListContainer>
      <ChatListLeft Image={Image} title={title} description={description} />
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
