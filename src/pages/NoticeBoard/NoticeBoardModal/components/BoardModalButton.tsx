import React, { useState } from 'react';
import styled from 'styled-components';
import dogPaws from 'assets/svg/dog-paws1.svg';
import pencilBtn from 'assets/svg/pencil.svg';
import { BoardDataProp } from 'types/type';
import BoardEditModal from './BoardEditModal';
import { useSelector } from 'react-redux';
import store from 'redux/store';
import boardActions from 'redux/actions/board';

const BoardModalButton = ({ modalContent }: BoardDataProp) => {
  const boardData = useSelector((state: any) => state.board.boardData);
  const [activateEditModal, setActivateEditModal] = useState(false);

  const handleEditModal = () => {
    setActivateEditModal(!activateEditModal);
  };

  const handleLike = async () => {
    boardData.is_liked
      ? store.dispatch(boardActions.likeMinus())
      : store.dispatch(boardActions.likePlus());

    await fetch(
      `https://togedog-dj.herokuapp.com/posts/${boardData.id}/likes`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoyMywidXNlcl90eXBlIjoibm9ybWFsIiwiZXhwIjoxNjY0Njg1NDQ1LCJpYXQiOjE2NjIwOTM0NDV9.Vew7ZXyxZWOiSjoBLyZSwtTDaMK3sHzNZyjXlHyUbGE`,
        },
      }
    );
  };

  return (
    <BoardModalButtonWrapper>
      <BoardModalButtonElement onClick={handleLike}>
        <BoardModalImg src={dogPaws} />
        <BoardModalText>{boardData.post_likes_count}</BoardModalText>
      </BoardModalButtonElement>

      <BoardModalButtonElement>
        <BoardModalImg src={pencilBtn} />
        <BoardModalText onClick={handleEditModal}>수정하기</BoardModalText>
        {activateEditModal && (
          <BoardEditModal handleEditModal={handleEditModal} />
        )}
      </BoardModalButtonElement>
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
