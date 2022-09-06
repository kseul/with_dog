import axios from 'axios';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import LeftSideList from 'pages/Admin/components/LeftSideMenu/LeftSideList';
import AdminHeader from 'pages/Admin/components/AdminHeader';
import AdminRightPageUser from 'pages/Admin/components/RightSection/AdminRightPageUser';
import AdminRightPagePost from 'pages/Admin/components/RightSection/AdminRightPagePost';
import LEFTSIDE_DB from 'pages/Admin/DATA/LEFTSIDE_LIST';

const AdminContainer = () => {
  const [clicked, setClicked] = useState('');
  const [postData, setPostData] = useState();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    axios
      .get(`https://togedog-dj.herokuapp.com/${location.pathname.slice(7)}`, {
        headers: {
          accept: '*/*',
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjo5LCJ1c2VyX3R5cGUiOiJhZG1pbiIsImV4cCI6MTY2NDY4NTQ5MiwiaWF0IjoxNjYyMDkzNDkyfQ.AQAciBT2VhdUDY-rQuoRiJCXE3BfIQJd95KgCXk0eKU`,
        },
      })
      .then(res => setPostData(res.data));
  }, [location.pathname]);

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
                navigate={navigate}
              />
            ))}
          </ListWrapper>
        </AdminLeftSection>
        <AdminRightSection>
          {params.value === 'users' ? (
            <AdminRightPageUser postData={postData} setPostData={setPostData} />
          ) : params.value === 'posts' ? (
            <AdminRightPagePost postData={postData} setPostData={setPostData} />
          ) : params.value === 'posts/all/deleted' ? (
            <AdminRightPagePost postData={postData} setPostData={setPostData} />
          ) : (
            <AdminRightPageUser postData={postData} setPostData={setPostData} />
          )}
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
  padding-top: 1.5rem;
  list-style: none;
`;

const AdminRightSection = styled.div`
  width: calc(100% - 12.5rem);
  height: calc(100vh - 6.25rem);
`;

export default AdminContainer;
