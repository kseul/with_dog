import styled from 'styled-components';
import { useEffect, useState } from 'react';
import useAxios from 'hooks/useAxios';
import NoticeModal from 'pages/Admin/components/Modal/NoticeModal';
import logo from 'assets/svg/with-dog-logo.svg';
import { BsFilePost } from 'react-icons/bs';
import { FaCommentDots } from 'react-icons/fa';

const AdminHeader = ({ onCurrentModal, modalId }) => {
  const postClassName = 'post_report';
  const commentClassName = 'comment_report';
  const [getClassName, setGetClassName] = useState<string>('');
  const [dataSort, setDataSort] = useState([]);

  const [isNoticeModalOpen, setIsNoticeModalOpen] = useState<Boolean>(false);
  const [isNoticeDetailModal, setIsNoticeDetailModal] =
    useState<Boolean>(false);

  const { response } = useAxios({
    method: 'GET',
    url: `https://togedog-dj.herokuapp.com/admin/notices`,
    headers: {
      accept: '*/*',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    },
  });

  const noticeModal = (): void => {
    setIsNoticeModalOpen(prev => !prev);
  };

  const noticeDetailModal = (): void => {
    setIsNoticeDetailModal(prev => !prev);
  };

  const setTarget = (target: string): void => {
    setGetClassName(target);
  };

  useEffect(() => {
    if (getClassName === postClassName) {
      setDataSort(response?.data.post_reports);
    } else if (getClassName === commentClassName) {
      setDataSort(response?.data.comment_reports);
    }
  }, [setTarget]);

  return (
    <AdminHeaderContainer>
      <TitleBox>
        <Logo src={logo} />
        <AdminHeaderTitle>함께하개</AdminHeaderTitle>
      </TitleBox>
      <AdminNoticeWrapper>
        <BsFilePost
          className={postClassName}
          onClick={() => {
            noticeModal();
            setTarget(postClassName);
          }}
        />
        {response?.data.post_reports.length !== 0 && (
          <PostNoticeNum>{response?.data.post_reports.length}</PostNoticeNum>
        )}
        <FaCommentDots
          className={commentClassName}
          onClick={() => {
            noticeModal();
            setTarget(commentClassName);
          }}
        />
        {response?.data.comment_reports.length !== 0 && (
          <CommentNoticeNum>
            {response?.data.comment_reports.length}
          </CommentNoticeNum>
        )}
        {isNoticeModalOpen && (
          <NoticeModal
            data={dataSort}
            noticeDetailModal={noticeDetailModal}
            isNoticeDetailModal={isNoticeDetailModal}
            onCurrentModal={onCurrentModal}
            modalId={modalId}
            getClassName={getClassName}
          />
        )}
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

  .post_report {
    margin-right: 1rem;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .comment_report {
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const PostNoticeNum = styled.span`
  position: absolute;
  left: 13px;
  padding-top: 5px;
  width: 1.3rem;
  height: 1.3rem;
  background-color: #00eeff;
  border-radius: 50%;
  font-size: 0.8rem;
  text-align: center;
`;

const CommentNoticeNum = styled.span`
  position: absolute;
  left: 57px;
  padding-top: 5px;
  width: 1.3rem;
  height: 1.3rem;
  background-color: #00eeff;
  border-radius: 50%;
  font-size: 0.8rem;
  text-align: center;
`;
export default AdminHeader;
