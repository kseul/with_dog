import styled from 'styled-components';
import Nav from 'pages/components/Nav/Nav';
import Page1Bg from 'assets/images/mainPage1.jpeg';
import Page2Bg from 'assets/images/mainPage2.jpeg';
import Page3Bg from 'assets/images/mainPage3.jpeg';
import Page4Bg from 'assets/images/mainPage4.jpeg';
import Page5Bg from 'assets/images/mainPage5.jpeg';
import dogBlackPaw from 'assets/svg/dog-paws1.svg';
import ToMbtiButton from './components/toMbtiButton/ToMbtiButton';
import FirstPage from './pageComposition/FirstPage';

const Main = () => {
  return (
    <>
      <Nav />
      <Container>
        <FirstPage backGroundImage={Page1Bg} />
        <Page2>
          <TextContainer>
            <Page2Title>
              내 반려견과 잘 맞는 <br />
              MBTI 친구는 누굴까요?
            </Page2Title>
            <Page2SubTitle>
              채팅을 통해서 비슷한 성향의 친구들과 <br />
              교류하며 정보를 공유해보세요.
            </Page2SubTitle>
          </TextContainer>
        </Page2>
        <Page3>
          <TextContainer2>
            <Page3Title>
              반려견과의 행복한 순간을
              <br /> 공유하세요!
            </Page3Title>
            <Page3SubTitle>
              내 반려견의 행복한 순간을 다른 친구들과 <br />
              함께 나눠보세요.
            </Page3SubTitle>
          </TextContainer2>
        </Page3>
        <Page4>
          <TextContainer>
            <Page4Title>산책 메이트 추천 받고 가시개!</Page4Title>
            <Page4SubTitle>
              자동 매칭 시스템을 통하여 비슷한 성격의 <br />
              반려견과 산책을 떠나볼까요?
            </Page4SubTitle>
          </TextContainer>
        </Page4>
        <Page5>
          <Page5Container>
            <Page5Title>내 반려견에 대해 더 알아가고 싶으시나요?</Page5Title>
            <Page5SubTitle>지금 바로 반려견 MBTI 검사하러 가개!</Page5SubTitle>
            <Page5ButtonWrapper>
              <ToMbtiButton
                title="검사하개"
                icon={dogBlackPaw}
                textColor="black"
                buttonColor="#E3E3E3"
                buttonSize={13}
                textSize={25}
              />
            </Page5ButtonWrapper>
          </Page5Container>
        </Page5>
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const TextContainer = styled.div`
  padding-top: 17rem;
  padding-left: 6rem;
`;
const Page2 = styled.div`
  height: 100vh;
  background-image: url(${Page2Bg});
  background-size: cover;
  scroll-snap-align: center;
  scroll-snap-stop: always;
`;
const Page2Title = styled.div`
  font-size: 4.7vmin;
  font-weight: 600;
  line-height: 1.4;
`;
const Page2SubTitle = styled.div`
  padding-top: 4rem;
  font-size: 3vmin;
  line-height: 1.4;
`;
const Page3 = styled.div`
  height: 100vh;
  background-image: url(${Page3Bg});
  background-size: cover;
  scroll-snap-align: center;
  scroll-snap-stop: always;
`;
const TextContainer2 = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  flex-direction: column;
  padding-top: 17rem;
  padding-right: 6rem;
`;
const Page3Title = styled.div`
  padding-right: 10px;
  font-size: 4.7vmin;
  font-weight: 600;
  line-height: 1.4;
`;
const Page3SubTitle = styled.div`
  padding-top: 4rem;
  font-size: 3vmin;
  line-height: 1.4;
`;
const Page4 = styled.div`
  height: 100vh;
  background-image: url(${Page4Bg});
  background-size: cover;
  scroll-snap-align: center;
  scroll-snap-stop: always;
`;
const Page4Title = styled.div`
  font-size: 4.7vmin;
  font-weight: 600;
`;
const Page4SubTitle = styled.div`
  padding-top: 4rem;
  font-size: 3vmin;
  line-height: 1.4;
`;
const Page5 = styled.div`
  height: 100vh;
  background-image: url(${Page5Bg});
  background-size: cover;
  scroll-snap-align: center;
  scroll-snap-stop: always;
`;
const Page5Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Page5Title = styled.div`
  font-size: 6vmin;
  font-weight: 700;
  color: white;
`;
const Page5SubTitle = styled.div`
  margin-top: 4rem;
  font-size: 4vmin;
`;
const Page5ButtonWrapper = styled.div`
  margin-top: 4rem;
`;
export default Main;
