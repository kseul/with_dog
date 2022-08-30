import React from 'react';
import styled from 'styled-components';

const BoardModalTyping = () => {
  return (
    <BoardModalTypingWrapper>
      <BoardModalTypingInput placeholder="발도장 찍기..." />
      <BoardModalTypingButton>발도장꾹</BoardModalTypingButton>
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
