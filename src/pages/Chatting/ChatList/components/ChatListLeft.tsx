import styled from 'styled-components';
import { ChatListProp } from 'pages/Chatting/type';

const ChatListLeft = ({ Image, title, description }: ChatListProp) => {
  return (
    <ChatListLeftContainer>
      <Image style={{ width: '5.5rem', marginRight: '1rem' }} />
      <DogType>{title}</DogType>
      <Line />
      <Introduce>{description}</Introduce>
    </ChatListLeftContainer>
  );
};

const ChatListLeftContainer = styled.div`
  ${props => props.theme.flex.flexBox('row')}
  justify-content: start;
  flex-basis: 80%;
  height: 7rem;
  background-color: white;
  border-radius: 1.2rem 0 0 1.2rem;
  padding: 1.6rem;
`;

const DogType = styled.div`
  min-width: 5rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

const Line = styled.div`
  background-color: ${props => props.theme.colors.lineLightGray};
  width: 2px;
  height: 3.5rem;
  margin: 0 0.3rem 0 0.3rem;
`;

const Introduce = styled.div`
  flex-basis: 100%;
  color: ${props => props.theme.colors.gray};
  font-size: 1.15rem;
  line-height: 1.7rem;
  margin-left: 1rem;
`;

export default ChatListLeft;
