import styled from 'styled-components';
import { useEffect, useState } from 'react';
import ListHeaderBox from 'pages/Admin/components/ListHeaderBox';
import ListContentsBox from 'pages/Admin/components/ListContentsBox';
import axios from 'axios';

const AdminRightHeader = () => {
  const [userData, setData] = useState([]);

  useEffect(() => {
    axios
      .get('/Users/sozzln/Desktop/with_dog/src/pages/Admin/DATA/userData.json')
      .then(res => setData(res.data));
  }, []);

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
          <DateFilter></DateFilter>
        </SortByDate>
        <SortByUser>
          <UserTitle>
            <TitleText>사용자 검색</TitleText>
          </UserTitle>
          <UserInput />
        </SortByUser>
      </SortBox>
      <UserListContainer>
        <UserListHeader>
          <ListHeaderBox />
          (userData &&
          {userData.map(data => (
            <ListContentsBox data={data} />
          ))}
          )
        </UserListHeader>
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

const UserListHeader = styled.div``;

export default AdminRightHeader;
