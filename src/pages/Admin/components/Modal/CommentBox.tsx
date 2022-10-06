import styled from 'styled-components';
import { CommentTypes } from 'pages/Admin/type';

interface CommentProps {
  comment: CommentTypes;
}

const CommentBox = ({ comment }: CommentProps) => {
  return (
    <CommentBoxWrapper>
      <ProfileImage src={comment.user_thumbnail} />
      <CommentContent>
        <UserNickName>{comment.user_nickname}</UserNickName>
        <Comment>{comment.content}</Comment>
      </CommentContent>
    </CommentBoxWrapper>
  );
};

const CommentBoxWrapper = styled.div`
  ${props => props.theme.flex.flexBox('', '', '')}
  width: 100%;
  height: 3rem;
`;

const ProfileImage = styled.img`
  margin-top: 0.2rem;
  margin-left: 0.5rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;

const CommentContent = styled.div`
  margin-top: 0.2rem;
  margin-left: 1rem;
  width: 100%;
  height: 2rem;
`;

const UserNickName = styled.p`
  width: 100%;
  height: 50%;
`;

const Comment = styled.p`
  width: 100%;
  height: 50%;
  font-size: 0.8rem;
`;

export default CommentBox;
