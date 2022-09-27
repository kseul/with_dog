import React from 'react';
import styled from 'styled-components';
import ToMbtiButton from '../components/toMbtiButton/ToMbtiButton';
import dogPaw from 'assets/svg/dog-paws2.svg';

interface LastPageProps {
  title: string;
  subTitle: string;
  backGroundImage: string;
}

const LastPage = React.forwardRef<HTMLDivElement, LastPageProps>(
  ({ title, subTitle, backGroundImage }, ref) => {
    return (
      <LastPageContainer
        style={{ backgroundImage: `url(${backGroundImage})` }}
        ref={ref}
      >
        <TextContainer>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
          <ButtonWrapper>
            <ToMbtiButton
              title="검사하개"
              icon={dogPaw}
              textColor="white"
              buttonColor="#48c0b8"
              buttonSize={13}
              textSize={25}
            />
          </ButtonWrapper>
        </TextContainer>
      </LastPageContainer>
    );
  }
);

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
