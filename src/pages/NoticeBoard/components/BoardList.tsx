import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BoardCard from './BoardCard';

const BoardList = () => {
  const [boardListData, setBoardListData] = useState([]);

  useEffect(() => {
    fetch(`https://togedog-dj.herokuapp.com/posts`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoyMywidXNlcl90eXBlIjoibm9ybWFsIiwiZXhwIjoxNjY0Njg1NDQ1LCJpYXQiOjE2NjIwOTM0NDV9.Vew7ZXyxZWOiSjoBLyZSwtTDaMK3sHzNZyjXlHyUbGE`,
      },
    })
      .then(response => response.json())
      .then(data => setBoardListData(data));
  });

  return (
    <BoardListWrapper>
      <>
        {boardListData.map(
          ({
            id,
            subject,
            image_url,
            created_at,
            user_nickname,
            post_likes_count,
          }) => {
            return (
              <BoardCard
                key={id}
                id={id}
                subject={subject}
                image_url={image_url}
                created_at={created_at}
                user_nickname={user_nickname}
                post_likes_count={post_likes_count}
              />
            );
          }
        )}
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
