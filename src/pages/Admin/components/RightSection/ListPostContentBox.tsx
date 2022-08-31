import styled from 'styled-components';

const ListPostContentsBox = ({ data, openModal, onCurrentModal }) => {
  const date = new Date(data.updated_at);
  const convertedDate = date.toISOString().substring(0, 10);

  return (
    <ListContents
      onClick={() => {
        openModal();
        onCurrentModal(data.id);
      }}
    >
      <UserName>{data.user_name}</UserName>
      <PostContent>{data.content}</PostContent>
      <UserMbti>{data.user_mbti}</UserMbti>
      <UserSignDate>{convertedDate}</UserSignDate>
    </ListContents>
  );
};

const ListContents = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr 1fr 1fr;
  margin: 0 auto;
  margin-bottom: -1px;
  width: 90%;
  height: 1.875rem;
  border: 1px solid #cac8c8;
  cursor: pointer;

  :hover {
    background-color: rgb(202, 200, 200, 0.3);
  }
`;

const UserName = styled.span`
  width: 6.25rem;
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

const UserSignDate = styled.span`
  text-align: center;
  vertical-align: middle;
`;

export default ListPostContentsBox;
