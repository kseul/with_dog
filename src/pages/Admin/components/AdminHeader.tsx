import styled from 'styled-components';

const AdminHeader = () => {
  return (
    <AdminHeaderContainer>
      <AdminHeaderTitle>함께하개</AdminHeaderTitle>
      <AdminLoginBox>로그인</AdminLoginBox>
    </AdminHeaderContainer>
  );
};

const AdminHeaderContainer = styled.div`
  ${props => props.theme.flex.flexBox('row')}
  width: 100%;
  height: 40px;
  background-color: ${props => props.theme.colors.darkGray};
`;

const AdminHeaderTitle = styled.p`
  width: 40px;
  height: 100%;
`;

const AdminLoginBox = styled.div`
  width: 40px;
  height: 100%;
`;

export default AdminHeader;
