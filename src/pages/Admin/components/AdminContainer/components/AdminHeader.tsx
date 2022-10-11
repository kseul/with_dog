import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import useAxios from 'hooks/useAxios';
import NoticeModal from 'pages/Admin/components/Modal/NoticeModal';
import API from 'config';
import { RootState } from 'redux/reducers';
import { PostReports, CommentReports } from 'pages/Admin/type';
import { BsFilePost } from 'react-icons/bs';
import { FaCommentDots } from 'react-icons/fa';
import logo from 'assets/svg/withDogLogo.svg';

interface AdminHeaderProps {
  onCurrentModal: (id: number) => void;
  modalId?: number;
}

const AdminHeader = ({ onCurrentModal, modalId }: AdminHeaderProps) => {
  const navigate = useNavigate();
  const userData = useSelector((state: RootState) => state.user.userData);
  const { nickname, thumbnail_url } = userData;
  const postClassName: string = 'post_report';
  const commentClassName: string = 'comment_report';
  const [getClassName, setGetClassName] = useState<string>('');
  const [dataSort, setDataSort] = useState<PostReports[] | CommentReports[]>(
    []
  );

  const [isNoticeModalOpen, setIsNoticeModalOpen] = useState<boolean>(false);
  const [isNoticeDetailModal, setIsNoticeDetailModal] =
    useState<boolean>(false);

  const { response } = useAxios({
    method: 'GET',
    url: `${API.ADMINNOTICE}`,
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

  const moveToMypage = () => {
    navigate(`/mypage`);
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
        <AdminUserManageWrapper>
          <AdminUserImg src={thumbnail_url} onClick={moveToMypage} />
          <AdminUserName>{nickname}</AdminUserName>
        </AdminUserManageWrapper>
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
  width: 15rem;
`;

const AdminNoticeWrapper = styled.div`
  ${props => props.theme.flex.flexBox('', 'center', 'space-between')};
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

const AdminUserManageWrapper = styled.div`
  ${props => props.theme.flex.flexBox('', 'center', '')};
  margin-left: 1rem;
  width: 7rem;
`;

const AdminUserImg = styled.img`
  margin-left: 0.5rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  cursor: pointer;

  :hover {
    border: 3px solid white;
  }
`;

const AdminUserName = styled.p`
  margin-left: 0.5rem;
  height: 100%;
`;

export default AdminHeader;
