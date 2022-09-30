import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import store from 'redux/store';
import boardActions from 'redux/actions/board';
import styled from 'styled-components/macro';
import BoardModalComment from '../NoticeBoardComment/BoardModalComment';
import BoardModalButton from './components/BoardModalButton';
import BoardModalTyping from './components/BoardModalTyping';
import BoardModalWriting from './components/BoardModalWriting';
import leftArrow from 'assets/svg/arrow-left.svg';
import rightArrow from 'assets/svg/arrow-right.svg';
import cancelButton from 'assets/svg/cancel.svg';
import API from 'config';

interface BoardModalProps {
  handleModal?: () => void;
}

const BoardModal = ({ handleModal }: BoardModalProps) => {
  const boardData = useSelector((state: any) => state.board.boardData);
  const boardListData = useSelector((state: any) => state.board.boardList);
  const [cookies] = useCookies(['userToken']);

  const date = boardData.created_at.substring(0, 10);

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

  const leftBtnHandle = () => {
    const boardListLength = boardListData.length;
    let boardId: number[] = [];

    for (let i = 0; i < boardListLength; i++) {
      boardId.push(boardListData[i].id);
    }

    let idIndex = boardId.indexOf(boardData.id) - 1;

    fetch(`${API.BOARDDETAIL}${boardId[idIndex]}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${cookies.userToken}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        store.dispatch(boardActions.getBoard(data));
      });
  };

  const rightBtnHandle = () => {
    const boardListLength = boardListData.length;
    let boardId: number[] = [];

    for (let i = 0; i < boardListLength; i++) {
      boardId.push(boardListData[i].id);
    }

    let idIndex = boardId.indexOf(boardData.id) + 1;

    fetch(`${API.BOARDDETAIL}${boardId[idIndex]}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${cookies.userToken}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        store.dispatch(boardActions.getBoard(data));
      });
  };

  return (
    <ModalContainer onClick={handleModal}>
      <Modal
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <ModalImageWrapper>
          <BoardImageBox src={boardData.image_url} />
        </ModalImageWrapper>
        <ModalContentWrapper>
          <BoardModalTitle> {boardData.subject} </BoardModalTitle>
          <BoardModalDate> {date} </BoardModalDate>
          <BoardModalMainText>
            <BoardModalWriting data={boardData} />
            <BoardModalComment data={boardData.comments_list} />
          </BoardModalMainText>
          <BoardModalButton boardData={boardData} />
          <BoardModalTyping boardData={boardData} />
        </ModalContentWrapper>
      </Modal>

      <BoardModalLeftConvenience
        src={leftArrow}
        onClick={e => {
          e.stopPropagation();
          leftBtnHandle();
        }}
      />
      <BoardModalRightConvenience
        src={rightArrow}
        onClick={e => {
          e.stopPropagation();
          rightBtnHandle();
        }}
      />
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
