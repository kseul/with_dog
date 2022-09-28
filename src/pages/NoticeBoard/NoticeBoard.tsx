import styled from 'styled-components';
import Nav from 'pages/components/Nav';
import BoardButton from './components/BoardButton';
import BoardList from './components/BoardList';

const NoticeBoard = () => {
  return (
    <>
      <Nav />
      <NoticeBoardContainer>
        <BoardButton />
        <BoardList />
      </NoticeBoardContainer>
    </>
  );
};

const NoticeBoardContainer = styled.div`
  margin-top: 5rem;
  padding: 2.5rem 15rem;
`;

export default NoticeBoard;
