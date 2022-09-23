import React, { useState } from 'react';
import styled from 'styled-components';
import dogPaws from 'assets/svg/dog-paws1.svg';
import pencilBtn from 'assets/svg/pencil.svg';
import { BoardDataProp } from 'types/type';
import BoardEditModal from './BoardEditModal';

const BoardModalButton = ({ modalContent }: BoardDataProp) => {
  const [activateEditModal, setActivateEditModal] = useState(false);

  const handleEditModal = () => {
    setActivateEditModal(!activateEditModal);
  };

  return (
    <BoardModalButtonWrapper>
      <BoardModalButtonElement>
        <BoardModalImg src={dogPaws} />
        <BoardModalText>{modalContent.post_likes_count} </BoardModalText>
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
