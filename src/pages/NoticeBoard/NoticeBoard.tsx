import Nav from 'pages/components/Nav';
import React from 'react';
import styled from 'styled-components';
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
  padding: 2.5rem 15rem;
`;

export default NoticeBoard;
