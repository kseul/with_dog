import styled from 'styled-components';
import CommentProfile from './components/CommentProfile';
import CommentText from './components/CommentText';

const BoardModalComment = ({ data }) => {
  return (
    <Comment>
      {data &&
        data.map(({ id, user_id, content, user_nickname, user_thumbnail }) => {
          return (
            <CommentContainer key={id}>
              <CommentProfile thumbnail={user_thumbnail} />
              <CommentText
                id={id}
                user_id={user_id}
                nickName={user_nickname}
                content={content}
              />
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
