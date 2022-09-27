import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BoardDataProp } from 'types/type';

const BoardModalTyping = ({ modalContent }: BoardDataProp) => {
  const [comment, setComment] = useState('');
  const navigate = useNavigate();

  const onChangeComment = e => {
    setComment(e.target.value);
  };

  const createComment = () => {
    const formData = new FormData();
    formData.append('content', comment);

    fetch(
      `https://togedog-dj.herokuapp.com/posts/${modalContent.id}/comments`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoyMywidXNlcl90eXBlIjoibm9ybWFsIiwiZXhwIjoxNjY0Njg1NDQ1LCJpYXQiOjE2NjIwOTM0NDV9.Vew7ZXyxZWOiSjoBLyZSwtTDaMK3sHzNZyjXlHyUbGE`,
        },
        body: formData,
      }
    )
      .then(response => response.json())
      .then(result => {
        if (result.message === 'success') {
          navigate('/noticeboard');
        }
      });
  };

  return (
    <BoardModalTypingWrapper>
      <BoardModalTypingInput
        onChange={onChangeComment}
        placeholder="발도장 찍기..."
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
