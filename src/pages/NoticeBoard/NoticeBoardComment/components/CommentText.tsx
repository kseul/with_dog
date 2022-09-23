import React from 'react';
import styled from 'styled-components';
import CommentReport from './CommentReport';

interface commentTextProps {
  id: number;
  nickName: string;
  content: string;
}

const CommentText = ({ id, nickName, content }: commentTextProps) => {
  return (
    <CommentTextWrapper>
      <CommentWriter>
        {nickName}
        <CommentReport id={id} />
      </CommentWriter>
      <CommentContent dangerouslySetInnerHTML={{ __html: content }} />
    </CommentTextWrapper>
  );
};

const CommentTextWrapper = styled.div`
  ${props => props.theme.flex.flexBox('column', '')};
  width: 85%;
  font-size: 0.9rem;
`;

const CommentWriter = styled.span`
  margin-bottom: 0.4rem;
  font-weight: bold;
`;

const CommentContent = styled.span`
  line-height: 1.2rem;
`;

export default CommentText;
