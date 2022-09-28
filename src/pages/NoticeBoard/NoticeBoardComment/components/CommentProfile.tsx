import styled from 'styled-components';

interface commentProfileProps {
  thumbnail: string;
}

const CommentProfile = ({ thumbnail }: commentProfileProps) => {
  return (
    <CommentProfileWrapper>
      <CommentProfileImg src={thumbnail} />
    </CommentProfileWrapper>
  );
};

const CommentProfileWrapper = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-right: 1rem;
  overflow: hidden;
`;

const CommentProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default CommentProfile;
