import styled from 'styled-components';

const PostHeaderBox = () => {
  return (
    <PostHeader>
      <UserName>사용자</UserName>
      <UserNickName>닉네임</UserNickName>
      <PostContent>게시글 제목</PostContent>
      <UserMbti>MBTI</UserMbti>
      <PostedDate>게시일</PostedDate>
    </PostHeader>
  );
};

const PostHeader = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr 1fr 1fr 1fr;
  margin-top: 1.875rem;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  height: 2.5rem;
  background-color: ${props => props.theme.colors.lightGray};
`;

const UserName = styled.span`
  width: 6.25rem;
  text-align: center;
  vertical-align: middle;
`;
const UserNickName = styled.span`
  text-align: center;
  vertical-align: middle;
`;

const PostContent = styled.span`
  text-align: center;
  vertical-align: middle;
`;

const UserMbti = styled.span`
  text-align: center;
  vertical-align: middle;
`;

const PostedDate = styled.span`
  text-align: center;
  vertical-align: middle;
`;

export default PostHeaderBox;
