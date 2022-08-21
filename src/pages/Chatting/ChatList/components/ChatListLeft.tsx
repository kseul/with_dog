import styled from 'styled-components';
import { ChatListProp } from 'types/type';

const ChatListLeft = ({ Image, title, description }: ChatListProp) => {
  return (
    <ChatListLeftContainer>
      <Image style={{ width: '100px', marginRight: '16px' }} />
      <DogType>{title}</DogType>
      <Introduce>{description}</Introduce>
    </ChatListLeftContainer>
  );
};

const ChatListLeftContainer = styled.div`
  ${props => props.theme.flex.flexBox('row')}
  height: 100px;
  background-color: white;
  border-radius: 20px 0 0 20px;
  padding: 25px;
`;

const DogType = styled.div`
  &:after {
    content: '';
    background-color: ${props => props.theme.colors.lineLightGray};
    padding: 5px 0.8px;
    margin: 20px;
  }
  font-size: 24px;
  font-weight: 600;
`;

const Introduce = styled.div`
  margin-left: 40px;
  color: ${props => props.theme.colors.gray};
  font-size: 14px;
  line-height: 20px;
`;

export default ChatListLeft;
