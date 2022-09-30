import styled from 'styled-components';
import ChatListBox from './components/ChatListBox';
import CHATLIST_DATA from '../DATA/CHATLIST_DATA';

const ChatList = () => {
  return (
    <ChatListContainer>
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
    </ChatListContainer>
  );
};

const ChatListContainer = styled.div`
  ${props => props.theme.flex.flexBox('column')}
  height: 100vh;
  padding-top: 4.8rem;
  background-color: #ececed;
  padding-top: 5rem;
`;

export default ChatList;
