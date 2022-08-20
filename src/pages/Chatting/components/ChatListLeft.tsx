import styled from 'styled-components';
import 탐험가형 from 'assets/svg/탐험가형.svg';
import { ChatListProp } from 'types/type';

const ChatListLeft = ({ title, description }: ChatListProp) => {
  return (
    <ChatListLeftContainer>
      <DogIcon src={탐험가형} />
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

const DogIcon = styled.img`
  width: 60px;
  margin-right: 20px;
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
