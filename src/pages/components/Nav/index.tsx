import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PageBox from './components/PageBox';
import UserProfile from './components/UserProfile';
import { RootState } from 'redux/reducers';
import logo from 'assets/svg/with-dog-logo.svg';

const Nav = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/');
  };
  const goToSignIn = () => {
    navigate('/signin');
  };

  const isLoggedIn = useSelector((state: RootState) => state.user.LoggedIn);

  return (
    <NavContainer>
      <PageContainer>
        {PAGE_LIST.map(({ id, title, moveTo }) => {
          return <PageBox key={id} title={title} moveTo={moveTo} />;
        })}
      </PageContainer>
      <LogoContainer onClick={goToMain}>
        <Logo src={logo} />
        <LogoText>함께하개</LogoText>
      </LogoContainer>
      <ProfileContainer>
        {isLoggedIn ? (
          <UserProfile />
        ) : (
          <RequireLogin onClick={goToSignIn}>✋ 로그인하시개</RequireLogin>
        )}
      </ProfileContainer>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  position: fixed;
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
  padding-left: 1.7rem;
`;

const LogoContainer = styled.div`
  position: relative;
  padding-right: 8.5rem;
  cursor: pointer;
`;

const Logo = styled.img`
  position: absolute;
  top: -40%;
  left: -28%;
  width: 3.75rem;
`;

const LogoText = styled.div`
  font-size: 1.69rem;
  font-weight: 600;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 4.2rem;
`;

const RequireLogin = styled.div`
  font-size: 1.188rem;
  font-weight: 600;
  cursor: pointer;
`;

export default Nav;

const PAGE_LIST = [
  { id: 1, title: 'MBTI 검사', moveTo: '/mbti' },
  { id: 2, title: '채팅방', moveTo: '/chatting-list' },
  { id: 3, title: '게시판', moveTo: '/noticeboard' },
  { id: 4, title: '산책하개', moveTo: '/' },
];
