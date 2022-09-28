import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';
import boardActions from 'redux/actions/board';
import store from 'redux/store';
import styled from 'styled-components';
import { BoardDataProp } from 'types/type';

const BoardModalTyping = ({ modalContent }: BoardDataProp) => {
  const [comment, setComment] = useState('');
  const [cookies] = useCookies(['userToken']);

  const boardData = useSelector((state: any) => state.board.boardData);

  const onChangeComment = e => {
    setComment(e.target.value);
  };

  const onPressEnter = e => {
    if (e.key === 'Enter') {
      createComment();
    }
  };

  const createComment = () => {
    const formData = new FormData();
    formData.append('content', comment);

    fetch(
      `https://togedog-dj.herokuapp.com/posts/${modalContent.id}/comments`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${cookies.userToken}`,
        },
        body: formData,
      }
    )
      .then(response => response.json())
      .then(result => {
        store.dispatch(boardActions.setComments(result));
        setComment('');
      });
  };

  return (
    <BoardModalTypingWrapper>
      <BoardModalTypingInput
        placeholder="발도장 찍기..."
        value={comment}
        onChange={onChangeComment}
        onKeyDown={onPressEnter}
      />
      <BoardModalTypingButton onClick={createComment}>
        발도장꾹
      </BoardModalTypingButton>
    </BoardModalTypingWrapper>
  );
};

const BoardModalTypingWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.8rem;
  border: 0.063rem solid ${props => props.theme.colors.lineLightGray};
  border-radius: 10rem;
`;

const BoardModalTypingInput = styled.input`
  width: 80%;
  height: 1rem;
  margin: 0.2rem;
  margin-left: 0.6rem;
  border: none;
`;

const BoardModalTypingButton = styled.button`
  width: 20%;
  height: 100%;
  border: none;
  border-left: 0.063rem solid ${props => props.theme.colors.lineLightGray};
  margin-right: 1rem;
  background-color: white;
  font-weight: bold;
  color: ${props => props.theme.colors.mint};
`;

export default BoardModalTyping;
