import styled from 'styled-components';
import ToMbtiButton from '../components/toMbtiButton/ToMbtiButton';
import { LastPageProp } from 'types/type';
import dogBlackPaw from 'assets/svg/dog-paws1.svg';

const LastPage = ({ title, subTitle, backGroundImage }: LastPageProp) => {
  return (
    <LastPageContainer
      style={{ backgroundImage: `url(${backGroundImage})` }}
      id="section5"
    >
      <TextContainer>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <ButtonWrapper>
          <ToMbtiButton
            title="검사하개"
            icon={dogBlackPaw}
            textColor="black"
            buttonColor="#E3E3E3"
            buttonSize={13}
            textSize={25}
          />
        </ButtonWrapper>
      </TextContainer>
    </LastPageContainer>
  );
};

const LastPageContainer = styled.div`
  height: 100vh;
  background-size: cover;
  scroll-snap-align: center;
  scroll-snap-stop: always;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Title = styled.div`
  font-size: 6vmin;
  font-weight: 700;
  color: ${props => props.theme.colors.white};
`;
const SubTitle = styled.div`
  margin-top: 4rem;
  font-size: 4vmin;
`;
const ButtonWrapper = styled.div`
  margin-top: 4rem;
`;

export default LastPage;
