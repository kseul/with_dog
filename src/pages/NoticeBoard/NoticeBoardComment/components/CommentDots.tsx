import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';
import dots from 'assets/svg/dots.svg';

interface commentReportProps {
  id: number;
  userId: number;
  loginId: number;
  content: string;
}

const CommentReport = ({
  id,
  userId,
  loginId,
  content,
}: commentReportProps) => {
  const boardData = useSelector((state: any) => state.board.boardData);
  const [showModal, setShowModal] = useState(false);
  const [cookies] = useCookies(['userToken']);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleCommentReport = async () => {
    const formData = new FormData();
    formData.append('content', content);

    await fetch(
      `https://togedog-dj.herokuapp.com/posts/${boardData.id}/comments/${id}/report/`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${cookies.userToken}`,
        },
        body: formData,
      }
    );

    alert('신고가 완료 되었습니다.');
  };

  const handleCommentDelete = async () => {
    await fetch(
      `https://togedog-dj.herokuapp.com/posts/${boardData.id}/comments/${id}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${cookies.userToken}`,
        },
      }
    );

    handleModal();
    alert('댓글이 삭제 되었습니다.');
  };

  return (
    <>
      <CommentDotsElement src={dots} onClick={handleModal} />
      {showModal && (
        <DotsModalContainer onClick={handleModal}>
          <DotsModal
            onClick={e => {
              e.stopPropagation();
            }}
          >
            {userId === loginId && (
              <DotsElement onClick={handleCommentDelete}>삭제하기</DotsElement>
            )}
            {userId !== loginId && (
              <DotsElement onClick={handleCommentReport}>신고하기</DotsElement>
            )}
          </DotsModal>
        </DotsModalContainer>
      )}
    </>
  );
};

const CommentDotsElement = styled.img`
  width: 0.65rem;
  height: 0.65rem;
  margin-left: 0.3rem;
  cursor: pointer;
`;

const DotsModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

const DotsModal = styled.div`
  ${props => props.theme.flex.flexBox('column', 'center', 'start')}
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 15vw;
  height: 10vh;
  z-index: 999;
  background-color: white;
  border-radius: 1rem;
  font-weight: normal;
`;

const DotsElement = styled.div`
  flex: 1;
  ${props => props.theme.flex.flexBox('column', 'center', 'center')}
  width: 100%;
  border-bottom: 0.063rem solid ${props => props.theme.colors.lineLightGray};

  &:hover {
    font-weight: 600;
    cursor: pointer;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export default CommentReport;
