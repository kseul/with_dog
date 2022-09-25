import React from 'react';
import styled from 'styled-components';

const BoardWriter = ({ thumbnail, nickName }) => {
  return (
    <WriterContainer>
      <WriterImage src={thumbnail} />
      <WriterText>
        <WriterName>{nickName}</WriterName>
      </WriterText>
    </WriterContainer>
  );
};

const WriterContainer = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
`;

const WriterImage = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

const WriterText = styled.div`
  font-size: 0.9rem;
`;

const WriterName = styled.span`
  font-weight: bold;
`;

export default BoardWriter;
