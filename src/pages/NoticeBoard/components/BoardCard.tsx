import React, { useState } from 'react';
import styled from 'styled-components';
import { BoardDataProp } from 'types/type';
import BoardModal from '../NoticeBoardModal/BoardModal';

const BoardCard = ({
  id,
  subject,
  image_url,
  created_at,
  user_nickname,
  post_likes_count,
}: BoardDataProp) => {
  const [activateModal, setActivateModal] = useState(false);

  const clickCard = () => {
    setActivateModal(!activateModal);
  };

  return (
    <>
      <CardContainer onClick={clickCard}>
        <CardImage src={image_url} />
        <CardDate>{created_at}</CardDate>
        <CardTitle>{subject}</CardTitle>
        <CardBottom>
          <WriterProfile>
            <WriterPhoto src={image_url} />
            <WriterName>{user_nickname}</WriterName>
          </WriterProfile>
          <CardViews>{post_likes_count}</CardViews>
        </CardBottom>
      </CardContainer>
      {activateModal && (
        <BoardModal
          clickCard={clickCard}
          subject={subject}
          created_at={created_at}
          image_url={image_url}
          post_likes_count={post_likes_count}
        />
      )}
    </>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 22rem;
  border-radius: 10%;
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

export default BoardCard;
