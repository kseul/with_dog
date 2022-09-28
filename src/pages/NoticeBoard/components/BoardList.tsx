import { useState } from 'react';
import { useCookies } from 'react-cookie';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import boardActions from 'redux/actions/board';
import store from 'redux/store';
import styled from 'styled-components/macro';
import BoardCard from './BoardCard';

const BoardList = () => {
  const [boardListData, setBoardListData] = useState([]);
  const [boardOffset, setBoardOffset] = useState(0);
  const [boardLimit, setBoardLimit] = useState(9);
  const [cookies] = useCookies(['userToken']);

  const fetchBoardList = async () => {
    const response = await fetch(
      `https://togedog-dj.herokuapp.com/posts?offset=${boardOffset}&limit=${boardLimit}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${cookies.userToken}`,
        },
      }
    );
    const data = await response.json();
    setBoardListData(boardListData.concat(data));
    store.dispatch(boardActions.getBoardList(data));
  };

  const fetchMoreList = async () => {
    await fetchBoardList();
    setBoardOffset(boardOffset + 9);
    setBoardLimit(boardLimit + 9);
  };

  const onIntersect: IntersectionObserverCallback = async (
    [entry],
    observer
  ) => {
    if (entry.isIntersecting) {
      // observer.unobserve(entry.target);
      await fetchMoreList();
      // observer.observe(entry.target);
    }
  };

  const { setTarget } = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
    onIntersect,
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
            user_thumbnail,
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
                user_thumbnail={user_thumbnail}
                post_likes_count={post_likes_count}
              />
            );
          }
        )}
      </>
      <Loading ref={setTarget} />
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

const Loading = styled.div<{ ref?: any }>``;

export default BoardList;
