import styled from 'styled-components';
import logo from 'assets/svg/with-dog-logo.svg';

const AdminHeader = () => {
  return (
    <AdminHeaderContainer>
      <TitleBox>
        <Logo src={logo} />
        <AdminHeaderTitle>함께하개</AdminHeaderTitle>
      </TitleBox>
      <AdminLoginBox>로그아웃</AdminLoginBox>
    </AdminHeaderContainer>
  );
};

const AdminHeaderContainer = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'space-between')};
  width: 100%;
  height: 6.25rem;
  background-color: ${props => props.theme.colors.mint};
`;

const TitleBox = styled.div`
  ${props => props.theme.flex.flexBox('', 'center', 'space-between')};
  margin-left: 1.25rem;
  width: 11rem;
`;

const Logo = styled.img`
  width: 5rem;
`;

const AdminHeaderTitle = styled.p`
  font-size: 1.563rem;
  color: ${props => props.theme.colors.white};
`;

const AdminLoginBox = styled.div`
  margin-right: 1.25rem;
  font-size: 1.563rem;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
`;

export default AdminHeader;
