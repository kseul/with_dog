import React from 'react';
import styled from 'styled-components';
import dog1 from 'assets/images/dog1.jpg';
import dog2 from 'assets/images/dog2.png';
import dog3 from 'assets/images/dog3.png';
import dog4 from 'assets/images/dog4.png';
import dog5 from 'assets/images/dog5.png';
import dog6 from 'assets/images/dog6.png';

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

const BOARD_DATA = [
  {
    id: 1,
    title: '우리 강아지',
    date: '2020-01-01',
    writer: 'choi',
    views: 19000,
    image: dog1,
  },
  {
    id: 2,
    title: '복덩이',
    date: '2020-01-01',
    writer: 'kim',
    views: 4250,
    image: dog2,
  },
  {
    id: 3,
    title: '신기하네요 글 길게쓰면?',
    date: '2020-01-01',
    writer: 'ahn',
    views: 6500,
    image: dog3,
  },
  {
    id: 4,
    title: '도배도배도배도배도배도배도배도배',
    date: '2020-01-01',
    writer: 'kang',
    views: 200,
    image: dog4,
  },
  {
    id: 5,
    title: '우리 강아지5',
    date: '2020-01-01',
    writer: 'yoon',
    views: 200,
    image: dog5,
  },
  {
    id: 6,
    title: '우리 강아지6',
    date: '2020-01-01',
    writer: 'hwang',
    views: 200,
    image: dog6,
  },
];

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
