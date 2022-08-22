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
  width: 70%;
  margin-bottom: 1.8rem;
  border-radius: 0.05rem;
`;

export default ChatListBox;
