import styled from 'styled-components';
import 탐험가형 from 'assets/svg/탐험가형.svg';

const ChatListLeft = () => {
  return (
    <ChatListLeftContainer>
      <DogIcon src={탐험가형} />
      <DogType>탐험가</DogType>
      <Introduce>
        소심하지만 세상이 궁금한 댕댕이, 츤데레 댕댕이, 몽상을 즐기는 탐험적
        댕댕이들을 위한 채팅방 입니다!
      </Introduce>
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
