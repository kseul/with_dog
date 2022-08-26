import styled from 'styled-components';
import { useState } from 'react';
import ListHeaderBox from 'pages/Admin/components/ListHeaderBox';
import ListContentsBox from 'pages/Admin/components/ListContentsBox';
import UserModal from 'pages/Admin/components/UserModal';
import PostModal from 'pages/Admin/components/PostModal';
import DatePickerComponent from 'pages/Admin/components/DatePickerComponent';
import PageNation from 'pages/Admin/components/PageNation';
import useAxios from 'hooks/useAxios';

const AdminRightSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const { response } = useAxios({
    method: 'GET',
    url: `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`,
    headers: {
      accept: '*/*',
    },
  });
  const userData = response?.data?.results;

  const openModal = (): void => {
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;
  const currentPost = userData => {
    if (userData) {
      return userData.slice(indexOfFirst, indexOfLast);
    }
  };
  const pagenatedData = currentPost(userData);

  return (
    <AdminRightContainer>
      <AdminRightTitle>관리자 페이지</AdminRightTitle>
      <FilterBox>
        <CheckAll />
        <CheckAllText>전체</CheckAllText>
        <ThreeBanned />
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
          <UserInput />
        </SortByUser>
      </SortBox>
      <UserListContainer>
        <ListHeaderBox />
        <ListContentsSection>
          {userData &&
            pagenatedData.map(data => (
              <ListContentsBox
                data={data}
                key={data.url}
                openModal={openModal}
                currentPost={currentPost}
              />
            ))}
          {userData && (
            <PageNation
              perPage={perPage}
              totalPost={userData.length}
              setCurrentPage={setCurrentPage}
            />
          )}
          {isModalOpen && <PostModal closeModal={closeModal} />}
        </ListContentsSection>
      </UserListContainer>
    </AdminRightContainer>
  );
};

const AdminRightContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const AdminRightTitle = styled.div`
  padding-left: 20px;
  padding-top: 20px;
  margin-bottom: 20px;
  height: 50px;
  font-size: 30px;
`;

const FilterBox = styled.div``;

const CheckAll = styled.button`
  margin-left: 20px;
  margin-right: 10px;
  width: 20px;
  height: 20px;
  border: 1px solid black;
  background-color: transparent;

  :hover {
    background-color: yellow;
  }
`;

const CheckAllText = styled.span`
  font-size: 20px;
`;

const ThreeBanned = styled.button`
  margin-left: 20px;
  margin-right: 10px;
  width: 20px;
  height: 20px;
  border: 1px solid black;
  background-color: transparent;

  :hover {
    background-color: yellow;
  }
`;

const ThreeBannedText = styled.span`
  font-size: 20px;
`;

const SortBox = styled.div`
  ${props => props.theme.flex.flexBox('row', '', 'left')}
  margin-left : 20px;
  margin-top: 20px;
`;

const SortByDate = styled.div`
  ${props => props.theme.flex.flexBox('row', '', 'left')}
  width: 300px;
`;

const DateTitle = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'center')}
  width: 80px;
  height: 30px;
  background-color: ${props => props.theme.colors.gray};
`;

const DateText = styled.span``;

const DateFilter = styled.div`
  background-color: ${props => props.theme.colors.gray};
`;

const SortByUser = styled.div`
  ${props => props.theme.flex.flexBox('row', '', 'left')}
  width: 300px;
`;

const UserTitle = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'center')}
  width: 80px;
  background-color: ${props => props.theme.colors.gray};
`;

const TitleText = styled.span``;

const UserInput = styled.input``;

const UserListContainer = styled.div``;

const ListContentsSection = styled.div``;

export default AdminRightSection;
