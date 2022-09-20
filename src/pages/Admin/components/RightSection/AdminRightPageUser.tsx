import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ListHeaderBox from 'pages/Admin/components/RightSection/ListHeaderBox';
import ListContentsBox from 'pages/Admin/components/RightSection/ListContentsBox';
import UserModal from 'pages/Admin/components/Modal/UserModal';
import DatePickerComponent from 'pages/Admin/components/DatePickerComponent';
import PageNation from 'pages/Admin/components/PageNation';
import AdminSpinner from 'pages/Admin/components/AdminSpinner/AdminSpinner';
import selectedImg from 'assets/svg/dog-paws2.svg';

const AdminRightPageUser = ({
  postData,
  loading,
  currentPage,
  setCurrentPage,
  counts,
  banNum,
  setBanNum,
}) => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalId, setModalId] = useState<number | undefined>();
  const [blockNum, setBlockNum] = useState(0);
  const perPage = 10;

  let date = new Date();
  const [startDate, setStartDate] = useState(
    new Date(date.setDate(date.getDate() - 7))
  );
  const [endDate, setEndDate] = useState(
    new Date(date.setDate(date.getDate() + 7))
  );
  const [search, setSearch] = useState('');
  const filterValue = {
    search: search,
    reported: banNum,
  };

  const openModal = (): void => {
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  const onCurrentModal = id => {
    setModalId(id);
  };

  const onSearch = e => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const updateUrl = filterValue => {
    const result = Object.keys(filterValue)
      .map(filter => `${filter}=${filterValue[filter]}`)
      .join('&');
    navigate(`?${result}`);
  };

  const allFilter = () => {
    setBanNum(0);
    setSearch('');
  };

  const reportFilter = e => {
    if (e.target.checked) {
      setBanNum(3);
    } else {
      setBanNum(0);
    }
  };

  useEffect(() => {
    updateUrl(filterValue);
  }, [banNum, search]);

  return (
    <AdminRightContainer>
      <AdminRightTitle />
      <FilterBox>
        <CheckAll onClick={() => allFilter()}>
          <SelectedImg className="pawImg" src={selectedImg} />
        </CheckAll>
        <CheckAllText>전체</CheckAllText>
        <InputLabel>
          <ThreeBanned type="checkbox" onClick={e => reportFilter(e)} />
        </InputLabel>
        <ThreeBannedText>신고 3회 이상</ThreeBannedText>
      </FilterBox>
      <SortBox>
        <SortByDate>
          <DateTitle>
            <DateText>날짜</DateText>
          </DateTitle>
          <DateFilter>
            <DatePickerComponent
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />
          </DateFilter>
        </SortByDate>
        <SortByUser>
          <UserTitle>
            <TitleText>사용자 검색</TitleText>
          </UserTitle>
          <UserInput
            type="text"
            value={search}
            placeholder="닉네임을 입력하세요."
            onChange={e => {
              onSearch(e);
            }}
          />
        </SortByUser>
      </SortBox>
      <UserListContainer>
        {loading ? (
          <AdminSpinner />
        ) : (
          postData && (
            <>
              <ListHeaderBox />
              <ListContentsSection>
                {postData.map(data => (
                  <ListContentsBox
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
                {isModalOpen && (
                  <UserModal closeModal={closeModal} modalId={modalId} />
                )}
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

const FilterBox = styled.div`
  ${props => props.theme.flex.flexBox('', 'center', '')}
`;

const CheckAll = styled.button`
  position: relative;
  margin-left: 1.25rem;
  margin-right: 0.625rem;
  width: 1.25rem;
  height: 1.25rem;
  border: 0.1px solid black;
  border-radius: 3px;
  background-color: transparent;
  overflow: hidden;

  :hover .pawImg {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 3px;
    background-color: ${props => props.theme.colors.boldGray};
  }
`;

const SelectedImg = styled.img`
  display: none;
  width: 1.25rem;
  height: 1.25rem;
`;

const CheckAllText = styled.span`
  margin-top: 2px;
  font-size: 1.25rem;
`;

const InputLabel = styled.label`
  margin-left: 1.25rem;
  margin-right: 0.625rem;

  input[type='checkbox']:checked {
    accent-color: ${props => props.theme.colors.boldGray};
  }
`;

const ThreeBanned = styled.input`
  width: 1.25rem;
  height: 1.25rem;
  border: 0.1px solid black;
  border-radius: 3px;
  cursor: pointer;
`;

const ThreeBannedText = styled.span`
  margin-top: 2px;
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
  margin-right: -3px;
  ${props => props.theme.flex.flexBox('row', 'center', 'center')}
  width: 5rem;
  height: 1.875rem;
  border-radius: 3px;
  background-color: ${props => props.theme.colors.lightGray};
`;

const DateText = styled.span``;

const DateFilter = styled.div`
  background-color: ${props => props.theme.colors.gray};
`;

const SortByUser = styled.div`
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

const UserListContainer = styled.div`
  min-width: 31.25rem;
`;

const ListContentsSection = styled.div``;

export default AdminRightPageUser;
