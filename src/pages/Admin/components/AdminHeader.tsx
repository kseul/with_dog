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
  ${props => props.theme.flex.flexBox('row', 'center', 'space-between')}
  width: 100%;
  height: 100px;
  background-color: ${props => props.theme.colors.gray};
`;

const AdminHeaderTitle = styled.p`
  margin-left: 20px;
  font-size: 25px;
`;

const AdminLoginBox = styled.div`
  margin-right: 20px;
  font-size: 25px;
`;

export default AdminHeader;
