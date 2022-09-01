import React from 'react';
import styled from 'styled-components';
import BoardCard from './BoardCard';
import BOARD_DATA from '../DATA/BOARD_DATA';

const BoardList = () => {
  return (
    <BoardListWrapper>
      <>
        {BOARD_DATA.map(({ id, title, image, date, writer, like }) => {
          return (
            <BoardCard
              key={id}
              id={id}
              title={title}
              image={image}
              date={date}
              writer={writer}
              like={like}
            />
          );
        })}
      </>
    </BoardListWrapper>
  );
};

const BoardListWrapper = styled.div`
  display: grid;
  gap: 7rem 5rem;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  width: 100%;
  margin-top: 1.5rem;

  @media screen and (min-width: 1920px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export default BoardList;
