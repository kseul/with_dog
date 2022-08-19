import styled from 'styled-components';
import LeftSideList from '/Users/sozzln/Desktop/with_dog/src/pages/Admin/components/LeftSideList';
import LEFTSIDE_DB from '/Users/sozzln/Desktop/with_dog/src/pages/Admin/DATA/LEFTSIDE_DB';

const AdminContainer = () => {
  return (
    <AdminPageContainer>
      <AdminHeader>
        <AdminHeaderTitle>함께하개</AdminHeaderTitle>
        <AdminLoginBox>로그인</AdminLoginBox>
      </AdminHeader>
      <AdminLeftSection>
        {LEFTSIDE_DB.map(list => (
          <LeftSideList list={list} key={list.id} />
        ))}
      </AdminLeftSection>
      <AdminRightSection></AdminRightSection>
    </AdminPageContainer>
  );
};

const AdminPageContainer = styled.div`
  width: 800px;
  height: 100%;
`;

const AdminHeader = styled.div`
  width: 100%;
  height: 40px;
`;

const AdminHeaderTitle = styled.p`
  width: 40px;
  height: 100%;
`;

const AdminLoginBox = styled.div`
  width: 40px;
  height: 100%;
`;

const AdminLeftSection = styled.div`
  width: 200px;
  height: 100%;
`;

const AdminRightSection = styled.div`
  width: 600px;
  height: 100%;
`;

export default AdminContainer;
