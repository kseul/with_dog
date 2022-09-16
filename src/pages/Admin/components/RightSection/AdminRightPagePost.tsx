import styled from 'styled-components';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PostHeaderBox from 'pages/Admin/components/RightSection/PostHeaderBox';
import DeletedPostModal from 'pages/Admin/components/Modal/DeletedPostModal';
import ListPostContentsBox from 'pages/Admin/components/RightSection/ListPostContentBox';
import PostModal from 'pages/Admin/components/Modal/PostModal';
import DatePickerComponent from 'pages/Admin/components/DatePickerComponent';
import PageNation from 'pages/Admin/components/PageNation';
import AdminSpinner from 'pages/Admin/components/AdminSpinner.tsx/AdminSpinner';

const AdminRightPagePost = ({
  postData,
  loading,
  currentPage,
  setCurrentPage,
  counts,
}) => {
  const location = useLocation();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalId, setModalId] = useState<number | undefined>();
  const [allToggle, setAllToggle] = useState<boolean>(false);
  const [banToggle, setBanToggle] = useState<boolean>(false);
  const [blockNum, setBlockNum] = useState(0);
  const perPage = 10;

  const openModal = (): void => {
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  const onCurrentModal = id => {
    setModalId(id);
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
        <SortByUser>
          <UserTitle>
            <TitleText>사용자 검색</TitleText>
          </UserTitle>
          <UserInput type="text" />
        </SortByUser>
      </SortBox>
      <UserListContainer>
        {loading ? (
          <AdminSpinner />
        ) : (
          postData && (
            <>
              <PostHeaderBox />
              <ListContentsSection>
                {postData.map(data => (
                  <ListPostContentsBox
                    data={data}
                    key={data.id}
                    openModal={openModal}
                    onCurrentModal={onCurrentModal}
                  />
                ))}
                <PageNation
                  perPage={perPage}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                  blockNum={blockNum}
                  setBlockNum={setBlockNum}
                  counts={counts}
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
