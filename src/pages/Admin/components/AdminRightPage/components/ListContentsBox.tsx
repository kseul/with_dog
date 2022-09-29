import styled from 'styled-components';

const ListContentsBox = ({ data, detailModalOpener, onCurrentModal }) => {
  return (
    <ListContents
      onClick={() => {
        detailModalOpener();
        onCurrentModal(data.id);
      }}
    >
      <UserNickName>{data.nickname}</UserNickName>
      <UserEmail>{data.email}</UserEmail>
      <UserMbti>{data.mbti}</UserMbti>
      <UserSignDate>{data.created_at.substring(0, 10)}</UserSignDate>
      <UserReported>{data.reported_count}</UserReported>
    </ListContents>
  );
};

const ListContents = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr 1fr 1fr 1fr;
  margin: 0 auto;
  margin-bottom: -1px;
  width: 90%;
  height: 2.5rem;
  border: 1px solid #cac8c8;
  background-color: white;
  cursor: pointer;

  :hover {
    background-color: rgb(202, 200, 200, 0.3);
  }
`;

const UserNickName = styled.span`
  width: 8rem;
  text-align: center;
  vertical-align: middle;
`;

const UserEmail = styled.span`
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

const UserReported = styled.span`
  text-align: center;
  vertical-align: middle;
`;
export default ListContentsBox;
