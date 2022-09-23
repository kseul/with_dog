import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import BoardModalComment from './components/BoardModalComment';
import BoardModalButton from './components/BoardModalButton';
import BoardModalTyping from './components/BoardModalTyping';
import leftArrow from 'assets/svg/arrow-left.svg';
import rightArrow from 'assets/svg/arrow-right.svg';
import cancelButton from 'assets/svg/cancel.svg';
import { BoardDataProp } from 'types/type';
import BoardWriter from './components/UI/BoardWriter';

const BoardModal = ({ handleModal, modalContent }: BoardDataProp) => {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <ModalContainer onClick={handleModal}>
      <Modal
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <ModalImageWrapper>
          <BoardImageBox src={modalContent.image_url} />
        </ModalImageWrapper>
        <ModalContentWrapper>
          <BoardModalTitle> {modalContent.subject} </BoardModalTitle>
          <BoardModalDate> {modalContent.created_at} </BoardModalDate>
          <BoardModalMainText>
            {/* REFACTORING : 작성자 부분 Comment 작성 부분을 재사용할 수 있지 않을까? */}
            <BoardWriter
              thumbnail={modalContent.user_thumbnail}
              nickName={modalContent.user_nickname}
            />
            <BoardModalText
              dangerouslySetInnerHTML={{ __html: modalContent.content }}
            />
            <BoardModalComment comments={modalContent.comments} />
          </BoardModalMainText>
          <BoardModalButton modalContent={modalContent} />
          <BoardModalTyping modalContent={modalContent} />
        </ModalContentWrapper>
      </Modal>

      <BoardModalLeftConvenience src={leftArrow} />
      <BoardModalRightConvenience src={rightArrow} />
      <BoardModalCancelConvenience src={cancelButton} />
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vmax;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Modal = styled.div`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75vw;
  height: 88vh;
  z-index: 999;
  background-color: white;
  border-radius: 1rem;
`;

const ModalImageWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 1rem;
  background-color: black;
`;

const BoardImageBox = styled.img`
  width: 100%;
  max-height: 82vh;
`;

const ModalContentWrapper = styled.div`
  ${props => props.theme.flex.flexBox('column', '', '')}
  width: 90%;
  padding: 3rem;
`;

const BoardModalTitle = styled.div`
  flex: 2;
  width: 100%;
  margin-bottom: 0.5rem;
  font-size: 2rem;
  font-weight: bold;
`;

const BoardModalDate = styled.div`
  flex: 1;
  width: 100%;
  padding-bottom: 0.5rem;
  border-bottom: 0.063rem solid ${props => props.theme.colors.lineLightGray};
  color: ${props => props.theme.colors.lightGray};
  font-size: 0.8rem;
`;

const BoardModalMainText = styled.div`
  flex: 20;
  width: 100%;
  padding: 0.5rem;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0.4rem;
    border-radius: 1rem;
    background: ${props => props.theme.colors.lineLightGray};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background: ${props => props.theme.colors.mint};
  }
`;

const BoardModalText = styled.div`
  font-size: 0.9rem;
  line-height: 1.2rem;
`;

const BoardModalConvenience = styled.img`
  position: absolute;
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
`;

const BoardModalLeftConvenience = styled(BoardModalConvenience)`
  top: 50vh;
  left: 2vw;
`;

const BoardModalRightConvenience = styled(BoardModalConvenience)`
  top: 50vh;
  right: 2vw;
`;

const BoardModalCancelConvenience = styled(BoardModalConvenience)`
  top: 2vh;
  right: 2vw;
`;

export default BoardModal;
