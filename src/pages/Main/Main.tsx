import styled from 'styled-components';
import Nav from 'pages/components/Nav/Nav';
import FirstPage from './pageComposition/FirstPage';
import ContentPages from './pageComposition/ContentPages';
import LastPage from './pageComposition/LastPage';
import Page1Bg from 'assets/images/mainPage1.jpeg';
import Page2Bg from 'assets/images/mainPage2.jpeg';
import Page3Bg from 'assets/images/mainPage3.jpeg';
import Page4Bg from 'assets/images/mainPage4.jpeg';
import Page5Bg from 'assets/images/mainPage5.jpeg';
import { useState } from 'react';

const Main = () => {
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const checkPageNum = (i: number) => {
    setCurrentPageNum(i);
  };
  return (
    <>
      <Nav />
      <MainContainer>
        <FirstPage backGroundImage={Page1Bg} data-anchor="section1" />
        {PAGE_DATA.map(({ id, title, subTitle, reverse, backGroundImage }) => {
          return (
            <ContentPages
              key={id}
              title={title}
              subTitle={subTitle}
              reverse={reverse}
              backGroundImage={backGroundImage}
              id={id}
            />
          );
        })}
        <LastPage
          title="내 반려견에 대해 더 알아가고 싶으시나요?"
          subTitle="지금 바로 반려견 MBTI 검사하러 가개!"
          backGroundImage={Page5Bg}
        />
        <DotsContainer>
          {Array.from({ length: 5 }).map((_, i) => (
            <Dots href={'#section' + (i + 1)} key={i} />
          ))}
        </DotsContainer>
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const DotsContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 2.5%;
`;

const Dots = styled.a`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1.5px solid gray;
  margin-bottom: 13px;
  /* background-color: gray; */
  /* &.active {
    background-color: gray;
  } */
  cursor: pointer;
`;

export default Main;

const PAGE_DATA = [
  {
    id: 2,
    title: '내 반려견과 잘 맞는\nMBTI 친구는 누굴까요?',
    subTitle:
      '채팅을 통해서 비슷한 성향의 친구들과\n교류하며 정보를 공유해보세요.',
    reverse: false,
    backGroundImage: Page2Bg,
  },
  {
    id: 3,
    title: '내 반려견과 잘 맞는\nMBTI 친구는 누굴까요?',
    subTitle:
      '채팅을 통해서 비슷한 성향의 친구들과\n교류하며 정보를 공유해보세요.',
    reverse: true,
    backGroundImage: Page3Bg,
  },
  {
    id: 4,
    title: '내 반려견과 잘 맞는\nMBTI 친구는 누굴까요?',
    subTitle:
      '채팅을 통해서 비슷한 성향의 친구들과\n교류하며 정보를 공유해보세요.',
    reverse: false,
    backGroundImage: Page4Bg,
  },
];
