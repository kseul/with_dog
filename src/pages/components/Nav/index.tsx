import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';
import AlertModal from '../AlertModal';
import PageBox from './components/PageBox';
import UserProfile from './components/UserProfile';
import withDogLogo from 'assets/svg/withDogLogo.svg';
import dogPaw from 'assets/svg/dog-paws2.svg';

const Nav = () => {
  const navigate = useNavigate();
  const [cookies] = useCookies(['userToken']);
  const [showAlertModal, setShowAlertModal] = useState('');

  const checkLoggedIn = cookies.userToken && true;

  const goToMain = () => {
    navigate('/');
  };
  const goToSignIn = () => {
    navigate('/signin');
  };

  return (
    <>
      {showAlertModal && (
        <AlertModal
          title={showAlertModal}
          setShowAlertModal={setShowAlertModal}
        />
      )}
      <NavContainer>
        <PageContainer>
          {PAGE_LIST.map(({ id, title, moveTo }) => {
            return (
              <PageBox
                key={id}
                title={title}
                moveTo={moveTo}
                checkLoggedIn={checkLoggedIn}
                setShowAlertModal={setShowAlertModal}
              />
            );
          })}
        </PageContainer>
        <LogoContainer onClick={goToMain}>
          <Logo src={withDogLogo} />
        </LogoContainer>
        <ProfileContainer>
          {checkLoggedIn ? (
            <UserProfile />
          ) : (
            <RequireLogin onClick={goToSignIn}>
              <Icon src={dogPaw} />
              로그인하시개
            </RequireLogin>
          )}
        </ProfileContainer>
      </NavContainer>
    </>
  );
};

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.5rem;
  width: 100%;
  height: 4.8rem;
  border-bottom: 2px solid #e1e2e3;
  background-color: #fdfdfd;
  z-index: 1;
`;

const PageContainer = styled.div`
  display: flex;
  padding-left: 3rem;
`;

const LogoContainer = styled.div`
  position: relative;
  padding-right: 10rem;
  cursor: pointer;
`;

const Logo = styled.img`
  width: 9rem;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 4rem;
`;

const RequireLogin = styled.div`
  position: relative;
  margin-right: 3rem;
  background-color: #7cccc7;
  border-radius: 2rem;
  padding: 0.6rem 1.2rem 0.6rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 400;
  color: white;
  cursor: pointer;
`;

const Icon = styled.img`
  position: absolute;
  top: 19%;
  left: 7%;
  height: 1.25rem;
`;

export default Nav;

const PAGE_LIST = [
  { id: 1, title: 'MBTI 검사', moveTo: '/mbti' },
  { id: 2, title: '채팅방', moveTo: '/chatting-list' },
  { id: 3, title: '게시판', moveTo: '/noticeboard' },
  { id: 4, title: '산책하개', moveTo: '/' },
];
