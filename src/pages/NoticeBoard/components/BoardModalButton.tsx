import React from 'react';
import styled from 'styled-components';
import dogPaws from 'assets/svg/dog-paws1.svg';
import cancelBtn from 'assets/svg/cancel.svg';

const BoardModalButton = () => {
  return (
    <BoardModalButtonWrapper>
      <BoardModalButtonElement>
        <BoardModalImg src={dogPaws} />
        <BoardModalText>2,200</BoardModalText>
      </BoardModalButtonElement>

      <BoardModalButtonElement>
        <BoardModalImg src={cancelBtn} />
        <BoardModalText>삭제하기</BoardModalText>
      </BoardModalButtonElement>
    </BoardModalButtonWrapper>
  );
};

const BoardModalButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0.6rem;
  background-color: mintcream;
`;

const BoardModalButtonElement = styled.div`
  display: flex;
  align-items: center;
  margin: 0.3rem;
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
