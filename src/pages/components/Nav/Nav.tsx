import styled from 'styled-components';
import logo from 'assets/svg/with-dog-logo.svg';
import test from 'assets/images/dog3.png';
import { useState } from 'react';
const Nav = () => {
  const [underLine, setUnderLine] = useState(false);

  return (
    <NavContainer>
      <PageContainer>
        {PAGE_LIST.map(({ id, title }) => {
          return (
            <PageBox
              key={id}
              onMouseEnter={() => {
                setUnderLine(true);
              }}
              onMouseLeave={() => {
                setUnderLine(false);
              }}
            >
              {title}
              {underLine && <PageHover />}
            </PageBox>
          );
        })}
      </PageContainer>
      <LogoContainer>
        <Logo src={logo} />
        <LogoText>함께하개</LogoText>
      </LogoContainer>
      <ProfileContainer>
        <UserImgWrapper>
          <UserImg src={test} />
        </UserImgWrapper>
        <UserNickName>안론머스크</UserNickName>
      </ProfileContainer>
    </NavContainer>
  );
};
const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  height: 80px;
  box-shadow: 3px 3px 3px #ecedef;
`;
const PageContainer = styled.div`
  display: flex;
  padding-left: 30px;
`;
const PageBox = styled.div`
  position: relative;
  padding-left: 30px;
  font-size: 19px;
`;
const PageHover = styled.div`
  position: absolute;
  left: 40%;
  bottom: -160%;
  background-color: ${props => props.theme.colors.mint};
  height: 3px;
  width: 45px;
`;
const LogoContainer = styled.div`
  position: relative;
  padding-right: 140px;
`;
const Logo = styled.img`
  position: absolute;
  top: -40%;
  left: -28%;
  width: 60px;
`;
const LogoText = styled.div`
  font-size: 27px;
  font-weight: 600;
`;
const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;
const UserImgWrapper = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 70%;
  overflow: hidden;
`;
const UserImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const UserNickName = styled.div`
  padding-left: 10px;
`;
export default Nav;

const PAGE_LIST = [
  { id: 1, title: 'MBTI 검사' },
  { id: 2, title: '채팅방' },
  { id: 3, title: '게시판' },
  { id: 4, title: '산책하개' },
];
