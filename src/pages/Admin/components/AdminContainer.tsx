import styled from 'styled-components';
import { useState } from 'react';
import LeftSideList from 'pages/Admin/components/LeftSideList';
import LEFTSIDE_DB from 'pages/Admin/DATA/LEFTSIDE_LIST';
import AdminHeader from 'pages/Admin/components/AdminHeader';
import AdminRightPage from 'pages/Admin/components/AdminRightPage';

const AdminContainer = () => {
  const [clicked, setClicked] = useState('');

  const setClick = list => {
    setClicked(list.listName);
  };

  return (
    <AdminPageContainer>
      <AdminHeader />
      <SectionContainer>
        <AdminLeftSection>
          <ListWrapper>
            {LEFTSIDE_DB.map(list => (
              <LeftSideList
                list={list}
                key={list.id}
                setClick={setClick}
                clicked={clicked}
              />
            ))}
          </ListWrapper>
        </AdminLeftSection>
        <AdminRightSection>
          <AdminRightPage />
        </AdminRightSection>
      </SectionContainer>
    </AdminPageContainer>
  );
};

const AdminPageContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const SectionContainer = styled.div`
  ${props => props.theme.flex.flexBox('row')}
`;

const AdminLeftSection = styled.div`
  ${props => props.theme.flex.flexBox('column', 'center', 'start')}
  padding-top : 1px;
  width: 12.5rem;
  height: calc(100vh - 6.25rem);
  background-color: ${props => props.theme.colors.lightGray};
`;

const ListWrapper = styled.ul`
  list-style: none;
`;

const AdminRightSection = styled.div`
  width: calc(100% - 12.5rem);
  height: calc(100vh - 6.25rem);
`;

export default AdminContainer;
