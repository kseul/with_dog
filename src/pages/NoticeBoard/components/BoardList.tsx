import React from 'react';
import styled from 'styled-components';
import BOARD_DATA from '../DATA/BOARD_DATA';

const BoardList = () => {
  return (
    <BoardListWrapper>
      {BOARD_DATA.map(({ id, title, image, date, writer, views }) => {
        return (
          <BoardCard key={id}>
            <CardImage src={image} />
            <CardDate>{date}</CardDate>
            <CardTitle>{title}</CardTitle>
            <CardBottom>
              <WriterProfile>
                <WriterPhoto src={image} />
                <WriterName>{writer}</WriterName>
              </WriterProfile>
              <CardViews>{views}</CardViews>
            </CardBottom>
          </BoardCard>
        );
      })}
    </BoardListWrapper>
  );
};

const BoardListWrapper = styled.div`
  display: grid;
  gap: 3rem 5rem;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 1.5rem;
`;

const BoardCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 16.35rem;
  height: 22rem;
  border-radius: 10%;
  background-color: white;
  box-shadow: rgb(0, 0, 0, 10%) 0px 4px 16px 0px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 65%;
  border-radius: 10%;
`;

const CardDate = styled.div`
  padding: 0.8rem 0rem;
  font-size: 0.8rem;
  text-align: center;
  color: ${props => props.theme.colors.gray};
`;

const CardTitle = styled.div`
  padding-bottom: 0.6rem;
  border-bottom: 1px solid ${props => props.theme.colors.lineLightGray};
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  white-space: nowrap;
`;

const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15rem;
  padding: 1rem;
`;

const WriterProfile = styled.div`
  display: flex;
  align-items: center;
  height: 2rem;
  font-weight: bold;
`;

const WriterPhoto = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  margin-right: 0.4rem;
`;

const WriterName = styled.div`
  padding-top: 0.2rem;
`;

const CardViews = styled.div`
  color: ${props => props.theme.colors.gray};
`;

export default BoardList;
