import React from 'react';
import styled from 'styled-components';

const BoardModalComment = ({ comments }) => {
  return (
    <Comment>
      {comments &&
        comments.map(({ id, content, user_nickname }) => {
          return (
            <CommentContainer key={id}>
              <CommentWrapper>
                <CommentProfile />
                <CommentText>
                  <CommentWriter>{user_nickname}</CommentWriter>
                  <CommentContent>{content}</CommentContent>
                </CommentText>
              </CommentWrapper>
            </CommentContainer>
          );
        })}
    </Comment>
  );
};

const Comment = styled.div``;

const CommentContainer = styled.div`
  width: 100%;
  height: 75%;
  border-bottom: 0.065rem solid ${props => props.theme.colors.lineLightGray};
`;

const CommentWrapper = styled.div`
  ${props => props.theme.flex.flexBox('', '', '')};
  margin-top: 1rem;
`;

const CommentProfile = styled.img`
  width: 3.5rem;
  height: 3rem;
  border: 1px solid black;
  border-radius: 50%;
  margin-right: 1rem;
`;

const CommentText = styled.div`
  ${props => props.theme.flex.flexBox('column', '')};
  width: 100%;
  font-size: 0.9rem;
`;

const CommentWriter = styled.span`
  margin-bottom: 0.4rem;
  font-weight: bold;
`;

const CommentContent = styled.span``;

export default BoardModalComment;
