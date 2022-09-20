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
                <CommentProfile>
                  <CommentProfileImg />
                </CommentProfile>
                <CommentText>
                  <CommentWriter>{user_nickname}</CommentWriter>
                  <CommentContent
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                </CommentText>
              </CommentWrapper>
            </CommentContainer>
          );
        })}
    </Comment>
  );
};

const Comment = styled.div``;

const CommentContainer = styled.div``;

const CommentWrapper = styled.div`
  ${props => props.theme.flex.flexBox('', '', '')};
  margin-top: 1rem;
`;

const CommentProfile = styled.div`
  width: 3rem;
  height: 3rem;
  border: 0.063rem solid black;
  border-radius: 70%;
  margin-right: 1rem;
  overflow: hidden;
`;

const CommentProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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

const CommentContent = styled.span`
  line-height: 1.2rem;
`;

export default BoardModalComment;
