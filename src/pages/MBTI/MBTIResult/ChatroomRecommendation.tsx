import styled, { css } from 'styled-components/macro';
import TitlePaw from '../../../assets/svg/TitlePawPositoin.svg';

const ChatroomRecommendation = () => {
  return (
    <ChatroomRecommendationContainer>
      <TitleContainer>
        <TitleIMG src={TitlePaw} />
        <TitleText>채팅방 추천받기</TitleText>
        <TitleIMG src={TitlePaw} />
      </TitleContainer>
      <ContentText>
        최고의 궁합을 자랑하는 함께하개의 채팅방 추천받기
      </ContentText>
      <JoinButton>
        <ButtonText>참여하개</ButtonText>
      </JoinButton>
    </ChatroomRecommendationContainer>
  );
};

const BasicText = css`
  text-align: center;
  color: #333333;
`;

const ChatroomRecommendationContainer = styled.div`
  ${props => props.theme.flex.flexBox('column', 'center', 'space-between')};
  margin: 5rem 0;
`;

const TitleContainer = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'space-between')};
  width: 25rem;
`;

const TitleIMG = styled.img`
  width: 1.563rem;
`;

const TitleText = styled.span`
  ${BasicText}
  font-size: 1.563rem;
`;

const ContentText = styled.span`
  margin-top: 2.5rem;
  ${BasicText}
  font-size: 1.563rem;
  font-weight: 300;
`;

const JoinButton = styled.button`
  width: 33.75rem;
  height: 3.125rem;
  margin-top: 1.25rem;
  background-color: #888888;
  border-style: none;
  border-radius: 3.125rem;
  &:hover {
    background-color: #7dccc7;
  }
`;

const ButtonText = styled.span`
  color: white;
  font-size: 1.563rem;
  font-weight: 500;
`;

export default ChatroomRecommendation;
