import styled from 'styled-components';
import { useState } from 'react';
import useAxios from 'hooks/useAxios';
import NoticeModal from 'pages/Admin/components/Modal/NoticeModal';
import logo from 'assets/svg/with-dog-logo.svg';
import { AiFillBell } from 'react-icons/ai';

const AdminHeader = () => {
  const { response } = useAxios({
    method: 'GET',
    url: `https://togedog-dj.herokuapp.com/admin/notices`,
    headers: {
      accept: '*/*',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    },
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (): void => {
    setIsModalOpen(prev => !prev);
  };

  return (
    <AdminHeaderContainer>
      <TitleBox>
        <Logo src={logo} />
        <AdminHeaderTitle>함께하개</AdminHeaderTitle>
      </TitleBox>
      <AdminNoticeWrapper>
        <AiFillBell className="noticeIcon" onClick={openModal} />
        {response?.data.count !== 0 && (
          <NoticeNum>{response?.data.count}</NoticeNum>
        )}
        {isModalOpen && <NoticeModal data={response?.data} />}
      </AdminNoticeWrapper>
    </AdminHeaderContainer>
  );
};

const AdminHeaderContainer = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'space-between')};
  width: 100%;
  height: 6.25rem;
  background-color: ${props => props.theme.colors.mint};
`;

const TitleBox = styled.div`
  ${props => props.theme.flex.flexBox('', 'center', 'space-between')};
  margin-left: 1.25rem;
  width: 11rem;
`;

const Logo = styled.img`
  width: 5rem;
`;

const AdminHeaderTitle = styled.p`
  font-size: 1.563rem;
  color: ${props => props.theme.colors.white};
`;

const AdminNoticeWrapper = styled.div`
  position: relative;
  margin-right: 2rem;
  color: ${props => props.theme.colors.white};

  .noticeIcon {
    font-size: 2rem;
    cursor: pointer;
  }
`;

const NoticeNum = styled.span`
  position: absolute;
  left: 18px;
  padding-top: 5px;
  width: 1.3rem;
  height: 1.3rem;
  background-color: #00eeff;
  border-radius: 50%;
  font-size: 0.8rem;
  text-align: center;
`;

export default AdminHeader;
