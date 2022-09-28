import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import boardActions from 'redux/actions/board';
import store from 'redux/store';
import styled from 'styled-components';
import { BoardDataProp } from 'types/type';
import BoardModal from '../NoticeBoardModal/BoardModal';

interface BoardCardProps {
  id: number;
  subject: string;
  image_url: string;
  created_at: string;
  user_nickname: string;
  user_thumbnail: string;
  post_likes_count: number;
}

const BoardCard = ({
  id,
  subject,
  image_url,
  created_at,
  user_nickname,
  user_thumbnail,
  post_likes_count,
}: BoardCardProps) => {
  const [activateModal, setActivateModal] = useState(false);
  const [modalContent, setModalContent] = useState([]);
  const [cookies] = useCookies(['userToken']);

  const date = created_at.substring(0, 10);

  const handleModal = () => {
    setActivateModal(!activateModal);
  };

  useEffect(() => {
    if (activateModal) {
      fetch(`https://togedog-dj.herokuapp.com/posts/${id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${cookies.userToken}`,
        },
      })
        .then(response => response.json())
        .then(data => {
          setModalContent(data);
          store.dispatch(boardActions.getBoard(data));
        });
    }
  }, [activateModal]);

  return (
    <>
      <CardContainer onClick={handleModal}>
        <CardImageWrapper>
          <CardImage src={image_url} />
        </CardImageWrapper>
        <CardDate>{date}</CardDate>
        <CardTitle>{subject}</CardTitle>
        <CardBottom>
          <WriterProfile>
            <WriterPhoto src={user_thumbnail} />
            <WriterName>{user_nickname}</WriterName>
          </WriterProfile>
          <CardViews>{post_likes_count}</CardViews>
        </CardBottom>
      </CardContainer>
      {activateModal && (
        <BoardModal
          modalContent={modalContent}
          setModalContent={setModalContent}
          handleModal={handleModal}
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
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    transition: transform 0.5s;
  }
`;

const CardImageWrapper = styled.div`
  width: 100%;
  height: 65%;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10%;
  object-fit: cover;
`;

const CardDate = styled.div`
  padding: 0.8rem 0rem;
  font-size: 0.8rem;
  text-align: center;
  color: ${props => props.theme.colors.gray};
`;

const CardTitle = styled.div`
  width: 14rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${props => props.theme.colors.lineLightGray};
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
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
