import React from 'react';
import styled from 'styled-components';
import ToMbtiButton from '../components/toMbtiButton/ToMbtiButton';
import { MainPagesProp } from 'types/type';
import dogPaw from 'assets/svg/dog-paws2.svg';

const FirstPage = React.forwardRef<HTMLDivElement, MainPagesProp>(
  ({ backGroundImage }, ref) => {
    return (
      <FirstPageContainer
        style={{ backgroundImage: `url(${backGroundImage})` }}
        ref={ref}
      >
        <TextContainer>
          <Title>반려견에게 다가가는 순간 우리 함께하개</Title>
          <SubTitle>
            같은 하늘 아래 같은 개는 없다, 그래서 우리 함께하개!
          </SubTitle>
          <DescriptionContainer>
            <DescriptionTitle>
              80억 인구의 성격이 전부 다르듯, <br /> 강아지도 견종이 아닌,
            </DescriptionTitle>
            <DescriptionSubTitle>
              여러 후천적인 요인을 통해 각자 다른 성격을 가집니다. <br />
              우리 강아지의 성격을 MBTI로 알아보면서 다른 친구들과 소통해볼까요?
            </DescriptionSubTitle>
          </DescriptionContainer>
          <ButtonWrapper>
            <ToMbtiButton
              title="검사하개"
              icon={dogPaw}
              textColor="white"
              buttonColor="#7CCCC7"
              buttonSize={11}
              textSize={22}
            />
          </ButtonWrapper>
        </TextContainer>
      </FirstPageContainer>
    );
  }
);

const FirstPageContainer = styled.div`
  height: 100vh;
  background-size: cover;
  scroll-snap-align: center;
  scroll-snap-stop: always;
`;
const TextContainer = styled.div`
  padding-top: 17rem;
  padding-left: 6rem;
`;
const Title = styled.div`
  font-size: 4.7vmin;
  font-weight: 600;
`;
const SubTitle = styled.div`
  padding-top: 0.9rem;
  font-size: 3vmin;
`;
const DescriptionContainer = styled.div`
  margin-top: 4rem;
`;
const DescriptionTitle = styled.div`
  font-size: 2.8vmin;
  line-height: 1.2;
`;
const DescriptionSubTitle = styled.div`
  margin-top: 1.1rem;
  font-size: 2.3vmin;
  font-weight: 300;
  line-height: 1.2;
`;
const ButtonWrapper = styled.div`
  margin-top: 1.5rem;
`;

export default FirstPage;
