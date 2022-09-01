import React, { useState } from 'react';
import styled from 'styled-components';
import { BoardDataProp } from 'types/type';
import BoardModal from '../NoticeBoardModal/BoardModal';

const BoardCard = ({ id, title, image, date, writer, like }: BoardDataProp) => {
  const [activateModal, setActivateModal] = useState(false);

  const clickCard = () => {
    setActivateModal(!activateModal);
  };

  return (
    <>
      <CardContainer onClick={clickCard}>
        <CardImage src={image} />
        <CardDate>{date}</CardDate>
        <CardTitle>{title}</CardTitle>
        <CardBottom>
          <WriterProfile>
            <WriterPhoto src={image} />
            <WriterName>{writer}</WriterName>
          </WriterProfile>
          <CardViews>{like}</CardViews>
        </CardBottom>
      </CardContainer>
      {activateModal && (
        <BoardModal
          clickCard={clickCard}
          title={title}
          date={date}
          image={image}
          like={like}
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
