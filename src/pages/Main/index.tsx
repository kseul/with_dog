import axios from 'axios';
import styled from 'styled-components';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import store from 'redux/store';
import userActions from 'redux/actions/user';
import { useEffect, useRef, useState } from 'react';
import Nav from 'pages/components/Nav';
import FirstPage from './pageComposition/FirstPage';
import ContentPages from './pageComposition/ContentPages';
import LastPage from './pageComposition/LastPage';
import AlertModal from 'pages/components/AlertModal';
import PAGES_DATA from './DATA/PAGES_DATA';
import Page1Bg from 'assets/images/mainPage1.jpeg';
import Page5Bg from 'assets/images/mainPage5.jpeg';

const Main = () => {
  const pageRef = useRef<HTMLDivElement[]>([]);
  const [cookies] = useCookies(['userToken']);
  const [currentPage, setCurrentPage] = useState<unknown>();
  const [showAlertModal, setShowAlertModal] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post('https://togedog-dj.herokuapp.com/users/login/check', '', {
        headers: {
          Authorization: `Bearer ${cookies.userToken}`,
        },
      })
      .then(res => {
        if (res.status === 200) {
          store.dispatch(userActions.userAccess(true));
          store.dispatch(userActions.handleUserData(res.data));
        }
      })
      .catch(error => {
        if (error.response.status === 400) {
          setShowAlertModal('로그아웃 되었습니다');
          navigate('/');
        }
      });

    const pageObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setCurrentPage(entry.target);
          }
        });
      },
      { rootMargin: '-2% 0px', threshold: 0.5 }
    );
    pageRef.current.forEach((page: HTMLDivElement) =>
      pageObserver.observe(page)
    );
    return () => pageObserver.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <MainContainer>
        {showAlertModal && (
          <AlertModal
            title={showAlertModal}
            setShowAlertModal={setShowAlertModal}
          />
        )}
        <FirstPage
          backGroundImage={Page1Bg}
          ref={(el: HTMLDivElement) => (pageRef.current[0] = el)}
        />
        {PAGES_DATA.map(({ id, title, subTitle, reverse, backGroundImage }) => {
          return (
            <ContentPages
              key={id}
              title={title}
              subTitle={subTitle}
              reverse={reverse}
              backGroundImage={backGroundImage}
              id={id}
              ref={(el: HTMLDivElement) => (pageRef.current[id] = el)}
            />
          );
        })}
        <LastPage
          title="내 반려견에 대해 더 알아가고 싶으시나요?"
          subTitle="지금 바로 반려견 MBTI 검사하러 가개!"
          backGroundImage={Page5Bg}
          ref={(el: HTMLDivElement) => (pageRef.current[4] = el)}
        />
        <DotsWrapper>
          {Array.from({ length: 5 }).map((_, i) => (
            <Dots
              key={i}
              onClick={() => {
                pageRef.current[i].scrollIntoView({ behavior: 'smooth' });
                setCurrentPage(pageRef.current[i]);
              }}
              selected={pageRef.current[i] === currentPage}
            />
          ))}
        </DotsWrapper>
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const DotsWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 2.5%;
`;

const Dots = styled.div<{
  selected: unknown;
}>`
  width: 0.87rem;
  height: 0.87rem;
  margin-bottom: 0.9rem;
  border-radius: 50%;
  border: 1.7px solid gray;
  background-color: ${props => (props.selected ? 'gray' : '')};
  cursor: pointer;
  :hover {
    transform: scale(1.4);
  }
`;

export default Main;
