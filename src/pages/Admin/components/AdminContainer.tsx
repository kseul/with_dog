import axios from 'axios';
import styled from 'styled-components';
import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import LeftSideList from 'pages/Admin/components/LeftSideMenu/LeftSideList';
import AdminHeader from 'pages/Admin/components/AdminHeader';
import AdminRightPageUser from 'pages/Admin/components/RightSection/AdminRightPageUser';
import AdminRightPagePost from 'pages/Admin/components/RightSection/AdminRightPagePost';
import LEFTSIDE_DB from 'pages/Admin/DATA/LEFTSIDE_LIST';
import backGroundImg from 'assets/images/bg1.jpg';
import { ListData } from 'types/type';

const AdminContainer = () => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();

  const [clicked, setClicked] = useState<string>(location.pathname.slice(7));
  const [postData, setPostData] = useState();
  const [loading, setLoading] = useState<Boolean>(false);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [banNum, setBanNum] = useState<number>(0);
  const [counts, setCounts] = useState<number>();

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://togedog-dj.herokuapp.com/${location.pathname.slice(7)}${
          location.search ? location.search + '&' : '?'
        }page=${currentPage}`,
        {
          headers: {
            accept: '*/*',
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        }
      );
      setPostData(response.data.items);
      setCounts(response.data.count);
    } finally {
      setLoading(false);
    }
  }, [currentPage, location.pathname, location.search]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const setClick = (list: ListData): void => {
    setClicked(list.value);
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
            <AdminRightPageUser
              postData={postData}
              loading={loading}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              counts={counts}
              banNum={banNum}
              setBanNum={setBanNum}
            />
          ) : params.value === 'posts' ? (
            <AdminRightPagePost
              postData={postData}
              loading={loading}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              counts={counts}
              banNum={banNum}
              setBanNum={setBanNum}
            />
          ) : params.value === 'posts' ? (
            <AdminRightPagePost
              postData={postData}
              loading={loading}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              counts={counts}
              banNum={banNum}
              setBanNum={setBanNum}
            />
          ) : (
            <AdminRightPageUser
              postData={postData}
              loading={loading}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              counts={counts}
              banNum={banNum}
              setBanNum={setBanNum}
            />
          )}
        </AdminRightSection>
      </SectionContainer>
    </AdminPageContainer>
  );
};

const AdminPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  min-width: 50rem;
  background: url(${backGroundImg}) center no-repeat;
  background-size: cover;
`;

const SectionContainer = styled.div`
  ${props => props.theme.flex.flexBox('row')}
`;

const AdminLeftSection = styled.div`
  ${props => props.theme.flex.flexBox('column', 'center', 'start')}
  padding-top : 1px;
  width: 12.5rem;
  height: calc(100vh - 6.25rem);
  background-color: ${props => props.theme.colors.lineLightGray};
`;

const ListWrapper = styled.ul`
  width: 100%;
  padding-top: 1.5rem;
  list-style: none;
`;

const AdminRightSection = styled.div`
  width: calc(100vw - 12.5rem);
  height: calc(100vh - 6.25rem);
  min-width: 40rem;
`;

export default AdminContainer;
