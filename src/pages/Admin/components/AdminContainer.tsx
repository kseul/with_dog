import styled from 'styled-components';
import LeftSideList from 'pages/Admin/components/LeftSideList';
import LEFTSIDE_DB from 'pages/Admin/DATA/LEFTSIDE_LIST';
import AdminHeader from 'pages/Admin/components/AdminHeader';

const AdminContainer = () => {
  return (
    <AdminPageContainer>
      <AdminHeader />
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

const AdminLeftSection = styled.div`
  width: 200px;
  height: 100%;
`;

const AdminRightSection = styled.div`
  width: 600px;
  height: 100%;
`;

export default AdminContainer;
