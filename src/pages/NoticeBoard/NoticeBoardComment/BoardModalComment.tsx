import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CommentProfile from './components/CommentProfile';
import CommentText from './components/CommentText';

const BoardModalComment = ({ data }) => {
  console.log('this is comments', data);

  return (
    <Comment>
      {data &&
        data.map(({ id, content, user_nickname, user_thumbnail_url }) => {
          return (
            <CommentContainer key={id}>
              <CommentProfile thumbnail={user_thumbnail_url} />
              <CommentText id={id} nickName={user_nickname} content={content} />
            </CommentContainer>
          );
        })}
    </Comment>
  );
};

const Comment = styled.div``;

const CommentContainer = styled.div`
  ${props => props.theme.flex.flexBox('', '', '')};
  margin-top: 1rem;
`;

export default BoardModalComment;
