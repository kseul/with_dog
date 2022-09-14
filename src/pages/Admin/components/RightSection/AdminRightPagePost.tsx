import axios from 'axios';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PostHeaderBox from 'pages/Admin/components/RightSection/PostHeaderBox';
import DeletedPostModal from 'pages/Admin/components/Modal/DeletedPostModal';
import ListPostContentsBox from 'pages/Admin/components/RightSection/ListPostContentBox';
import PostModal from 'pages/Admin/components/Modal/PostModal';
import DatePickerComponent from 'pages/Admin/components/DatePickerComponent';
import PageNation from 'pages/Admin/components/PageNation';
import AdminSpinner from 'pages/Admin/components/AdminSpinner.tsx/AdminSpinner';

const AdminRightPagePost = ({ postData, setPostData, loading }) => {
  const location = useLocation();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalId, setModalId] = useState<number | undefined>();
  const [allToggle, setAllToggle] = useState<boolean>(false);
  const [banToggle, setBanToggle] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const [indexClicked, setIndexClicked] = useState('');
  const [pagenatedData, setPagenatedData] = useState(postData);
  const perPage = 10;
  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;

  useEffect(() => {
    if (postData) {
      setPagenatedData(postData.slice(indexOfFirst, indexOfLast));
    }
  }, [postData, indexOfFirst, indexOfLast]);

  const openModal = (): void => {
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  const onCurrentModal = id => {
    setModalId(id);
  };

  const onChangeSearch = e => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const onSearch = e => {
    e.preventDefault();
    if (search === null || search === '') {
      axios
        .get(`https://togedog-dj.herokuapp.com/${location.pathname.slice(7)}`, {
          headers: {
            accept: '*/*',
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjo5LCJ1c2VyX3R5cGUiOiJhZG1pbiIsImV4cCI6MTY2NDY4NTQ5MiwiaWF0IjoxNjYyMDkzNDkyfQ.AQAciBT2VhdUDY-rQuoRiJCXE3BfIQJd95KgCXk0eKU`,
          },
        })
        .then(res => {
          setPostData(res.data);
          setPagenatedData(res.data.slice(indexOfFirst, indexOfLast));
        });
    } else {
      const filterData = pagenatedData.filter(data =>
        data.user_nickname.includes(search)
      );
      setPostData(filterData);
      setPagenatedData(filterData.slice(indexOfFirst, indexOfLast));
      setCurrentPage(1);
    }
    setSearch('');
  };

  return (
    <AdminRightContainer>
      <AdminRightTitle />
      <FilterBox>
        <CheckAll
          onClick={() => setAllToggle(prev => !prev)}
          className={allToggle ? 'active' : ''}
        />
        <CheckAllText>전체</CheckAllText>
        <ThreeBanned
          onClick={() => setBanToggle(prev => !prev)}
          className={banToggle ? 'active' : ''}
        />
        <ThreeBannedText>신고 3회 이상</ThreeBannedText>
      </FilterBox>
      <SortBox>
        <SortByDate>
          <DateTitle>
            <DateText>날짜</DateText>
          </DateTitle>
          <DateFilter>
            <DatePickerComponent />
          </DateFilter>
        </SortByDate>
        <SortByUser onSubmit={e => onSearch(e)}>
          <UserTitle>
            <TitleText>사용자 검색</TitleText>
          </UserTitle>
          <UserInput type="text" value={search} onChange={onChangeSearch} />
        </SortByUser>
      </SortBox>
      <UserListContainer>
        {loading ? (
          <AdminSpinner />
        ) : (
          pagenatedData && (
            <>
              <PostHeaderBox />
              <ListContentsSection>
                {pagenatedData.map(data => (
                  <ListPostContentsBox
                    data={data}
                    key={data.id}
                    openModal={openModal}
                    onCurrentModal={onCurrentModal}
                  />
                ))}
                <PageNation
                  perPage={perPage}
                  totalPost={postData.length}
                  setCurrentPage={setCurrentPage}
                  setIndexClicked={setIndexClicked}
                  indexClicked={indexClicked}
                />
                {isModalOpen &&
                  (location.pathname === '/admin/posts' ? (
                    <PostModal closeModal={closeModal} modalId={modalId} />
                  ) : (
                    <DeletedPostModal
                      closeModal={closeModal}
                      modalId={modalId}
                    />
                  ))}
              </ListContentsSection>
            </>
          )
        )}
      </UserListContainer>
    </AdminRightContainer>
  );
};

const AdminRightContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const AdminRightTitle = styled.div`
  height: 1.5rem;
`;

const FilterBox = styled.div``;

const CheckAll = styled.button`
  margin-left: 1.25rem;
  margin-right: 0.625rem;
  width: 1.25rem;
  height: 1.25rem;
  border: 1px solid black;
  border-radius: 3px;
  background-color: transparent;

  &.active {
    background-color: ${props => props.theme.colors.boldGray};
  }

  :hover {
    background-color: ${props => props.theme.colors.boldGray};
  }
`;

const CheckAllText = styled.span`
  font-size: 1.25rem;
`;

const ThreeBanned = styled.button`
  margin-left: 1.25rem;
  margin-right: 0.625rem;
  width: 1.25rem;
  height: 1.25rem;
  border: 1px solid black;
  border-radius: 3px;
  background-color: transparent;

  &.active {
    background-color: ${props => props.theme.colors.boldGray};
  }

  :hover {
    background-color: ${props => props.theme.colors.boldGray};
  }
`;

const ThreeBannedText = styled.span`
  font-size: 1.25rem;
`;

const SortBox = styled.div`
  ${props => props.theme.flex.flexBox('row', '', 'left')}
  margin-left : 1.25rem;
  margin-top: 1.25rem;
`;

const SortByDate = styled.div`
  ${props => props.theme.flex.flexBox('row', '', 'left')}
  width: 18.75rem;
`;

const DateTitle = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'center')}
  margin-right : -3px;
  width: 5rem;
  height: 1.875rem;
  border-radius: 3px;
  background-color: ${props => props.theme.colors.lightGray};
`;

const DateText = styled.span``;

const DateFilter = styled.div`
  background-color: ${props => props.theme.colors.lightGray};
`;

const SortByUser = styled.form`
  ${props => props.theme.flex.flexBox('row', '', 'left')}
  width: 18.75rem;
`;

const UserTitle = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'center')}
  margin-right : -3px;
  width: 5rem;
  border-radius: 3px;
  background-color: ${props => props.theme.colors.lightGray};
`;

const TitleText = styled.span``;

const UserInput = styled.input``;

const UserListContainer = styled.div``;

const ListContentsSection = styled.div``;

export default AdminRightPagePost;
