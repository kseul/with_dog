import React from 'react';
import styled from 'styled-components';

const BoardModalText = ({ data }) => {
  return (
    <TextContainer>
      <TextProfileWrapper>
        <TextProfileImg src={data.user_thumbnail} />
      </TextProfileWrapper>
      <TextWrapper>
        <TextWriter>{data.user_nickname}</TextWriter>
        <Text dangerouslySetInnerHTML={{ __html: data.content }} />
      </TextWrapper>
    </TextContainer>
  );
};

const TextContainer = styled.div`
  ${props => props.theme.flex.flexBox('', '', '')};
  margin-top: 1rem;
`;

const TextProfileWrapper = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-right: 1rem;
  overflow: hidden;
`;

const TextProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  ${props => props.theme.flex.flexBox('column', '')};
  width: 85%;
  font-size: 0.9rem;
`;

const TextWriter = styled.span`
  margin-bottom: 0.4rem;
  font-weight: bold;
`;

const Text = styled.span`
  line-height: 1.2rem;
`;

export default BoardModalText;
