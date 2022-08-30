import styled from 'styled-components';

const AdminHeader = () => {
  return (
    <AdminHeaderContainer>
      <AdminHeaderTitle>함께하개</AdminHeaderTitle>
      <AdminLoginBox>로그아웃</AdminLoginBox>
    </AdminHeaderContainer>
  );
};

const AdminHeaderContainer = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'space-between')};
  width: 100%;
  height: 6.25rem;
  background-color: ${props => props.theme.colors.gray};
`;

const AdminHeaderTitle = styled.p`
  margin-left: 1.25rem;
  font-size: 1.563rem;
`;

const AdminLoginBox = styled.div`
  margin-right: 1.25rem;
  font-size: 1.563rem;
`;

export default AdminHeader;
