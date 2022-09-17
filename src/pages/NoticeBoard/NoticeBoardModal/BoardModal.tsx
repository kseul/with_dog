import React from 'react';
import styled from 'styled-components';
import BoardModalComment from './components/BoardModalComment';
import BoardModalButton from './components/BoardModalButton';
import BoardModalTyping from './components/BoardModalTyping';
import leftArrow from 'assets/svg/arrow-left.svg';
import rightArrow from 'assets/svg/arrow-right.svg';
import cancelButton from 'assets/svg/cancel.svg';
import { BoardDataProp } from 'types/type';

const BoardModal = ({ clickCard, modalContent }: BoardDataProp) => {
  return (
    <>
      <BoardModalContainer>
        <BoardModalImageWrapper>
          <BoardImageBox src={modalContent.image_url} />
        </BoardModalImageWrapper>
        <BoardModalContentWrapper>
          <BoardModalTitle> {modalContent.subject} </BoardModalTitle>
          <BoardModalDate> {modalContent.created_at} </BoardModalDate>
          <BoardModalContent> {modalContent.content} </BoardModalContent>
          <BoardModalComment comments={modalContent.comments} />
          <BoardModalButton post_likes_count={modalContent.post_likes_count} />
          <BoardModalTyping />
        </BoardModalContentWrapper>
      </BoardModalContainer>

      <BoardModalBackground onClick={clickCard}>
        <BoardModalLeftArrowButton src={leftArrow} />
        <BoardModalRightArrowButton src={rightArrow} />
        <BoardModalCancelButton src={cancelButton} />
      </BoardModalBackground>
    </>
  );
};

const BoardModalContainer = styled.div`
  display: flex;
  position: fixed;
  top: 10%;
  left: 17vw;
  width: 65vw;
  height: 80vh;
  z-index: 2;
  background-color: white;
  border-radius: 2rem;
`;

const BoardModalImageWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 2rem;
  background-color: black;
`;

const BoardImageBox = styled.img`
  width: 100%;
`;

const BoardModalContentWrapper = styled.div`
  ${props => props.theme.flex.flexBox('column')}
  width: 90%;
  padding: 3rem;
`;

const BoardModalTitle = styled.div`
  width: 100%;
  font-size: 2rem;
  font-weight: bold;
`;

const BoardModalDate = styled.div`
  width: 100%;
  margin: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 0.063rem solid ${props => props.theme.colors.lineLightGray};
  color: ${props => props.theme.colors.lightGray};
  font-size: 0.8rem;
`;

const BoardModalContent = styled.div`
  width: 100%;
  padding-bottom: 0.5rem;
`;

const BoardModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vmax;
  height: 100vmax;
  z-index: 1;
  background-color: black;
  opacity: 50%;
`;

const BoardModalLeftArrowButton = styled.img`
  position: absolute;
  top: 50vh;
  left: 9vw;
  width: 3.5rem;
  height: 3.5rem;
`;

const BoardModalRightArrowButton = styled.img`
  position: absolute;
  top: 50vh;
  left: 89vw;
  width: 3.5rem;
  height: 3.5rem;
`;

const BoardModalCancelButton = styled.img`
  position: absolute;
  top: 2vh;
  right: 2vw;
  width: 4rem;
  height: 4rem;
`;

export default BoardModal;
