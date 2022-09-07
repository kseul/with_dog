import styled from 'styled-components';
import logo from 'assets/svg/with-dog-logo.svg';
import userImg from 'assets/images/dog3.png';
import PageBox from './PageBox';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/');
  };
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
        <UserImgWrapper>
          <UserImg src={userImg} />
        </UserImgWrapper>
        <UserNickName>안론머스크</UserNickName>
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
  height: 5rem;
  border-bottom: 2px solid #e1e2e3;
  background-color: white;
  z-index: 1;
`;
const PageContainer = styled.div`
  display: flex;
  padding-left: 1.875rem;
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
`;
const UserImgWrapper = styled.div`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 70%;
  overflow: hidden;
`;
const UserImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const UserNickName = styled.div`
  padding-left: 0.625rem;
`;
export default Nav;

const PAGE_LIST = [
  { id: 1, title: 'MBTI 검사', moveTo: '/mbti' },
  { id: 2, title: '채팅방', moveTo: '/chatting-list' },
  { id: 3, title: '게시판', moveTo: '/noticeboard' },
  { id: 4, title: '산책하개', moveTo: '/' },
];
