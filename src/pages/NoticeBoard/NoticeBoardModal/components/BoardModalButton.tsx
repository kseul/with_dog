import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import boardActions from 'redux/actions/board';
import store from 'redux/store';
import styled from 'styled-components';
import BoardEditModal from './BoardEditModal';
import dogPaws from 'assets/svg/dog-paws1.svg';
import pencilBtn from 'assets/svg/pencil.svg';
import siren from 'assets/svg/siren.svg';
import API from 'config';

interface BoardModalButtonProps {
  boardData: any;
}

const BoardModalButton = ({ boardData }: BoardModalButtonProps) => {
  const [activateEditModal, setActivateEditModal] = useState(false);
  const loginId = useSelector((state: any) => state.user.userData.id);
  const userId = boardData.user_id;
  const [cookies] = useCookies(['userToken']);

  const handleEditModal = () => {
    setActivateEditModal(!activateEditModal);
  };

  const handleLike = async () => {
    boardData.is_liked
      ? store.dispatch(boardActions.likeMinus())
      : store.dispatch(boardActions.likePlus());

    await fetch(`${API.BOARDDETAIL}${boardData.id}/likes`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${cookies.userToken}`,
      },
    });
  };

  const handleReport = async () => {
    const formData = new FormData();
    formData.append('content', boardData.content);

    await fetch(`${API.BOARDDETAIL}${boardData.id}/report/`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${cookies.userToken}`,
      },
      body: formData,
    });
    return alert('신고가 완료되었습니다.');
  };

  return (
    <BoardModalButtonWrapper>
      <BoardModalButtonElement onClick={handleLike}>
        <BoardModalImg src={dogPaws} />
        <BoardModalText>{boardData.post_likes_count}</BoardModalText>
      </BoardModalButtonElement>

      {userId === loginId && (
        <BoardModalButtonElement>
          <BoardModalImg src={pencilBtn} />
          <BoardModalText onClick={handleEditModal}>수정하기</BoardModalText>
          {activateEditModal && (
            <BoardEditModal handleEditModal={handleEditModal} />
          )}
        </BoardModalButtonElement>
      )}

      {userId !== loginId && (
        <BoardModalButtonElement>
          <BoardModalImg src={siren} />
          <BoardModalText onClick={handleReport}>신고하기</BoardModalText>
        </BoardModalButtonElement>
      )}
    </BoardModalButtonWrapper>
  );
};

const BoardModalButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0.6rem;
`;

const BoardModalButtonElement = styled.div`
  display: flex;
  align-items: center;
  margin: 0.3rem;
  cursor: pointer;
`;

const BoardModalImg = styled.img`
  width: 1rem;
  height: 1rem;
  margin: 0.2rem;
`;

const BoardModalText = styled.span`
  color: ${props => props.theme.colors.lightGray};
`;

export default BoardModalButton;
