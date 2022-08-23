import styled from 'styled-components';
import ChatListBox from './components/ChatListBox';
import CHATLIST_DATA from '../DATA/CHATLIST_DATA';

const ChatList = () => {
  return (
    <ChattingContainer>
      {CHATLIST_DATA.map(
        ({ id, Image, title, description, modalDescription, type }) => {
          return (
            <ChatListBox
              key={id}
              id={id}
              Image={Image}
              title={title}
              description={description}
              modalDescription={modalDescription}
              type={type}
            />
          );
        }
      )}
    </ChattingContainer>
  );
};

const ChattingContainer = styled.div`
  ${props => props.theme.flex.flexBox('column')}
  height: 100vh;
  background-color: #ececed;
`;

export default ChatList;
