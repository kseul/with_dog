import styled from 'styled-components';
import { PostDataTypes } from 'pages/Admin/type';

interface ListPostContentsBoxProps {
  data: PostDataTypes;
  detailModalOpener: () => void;
  onCurrentModal: (id: number) => void;
}

const ListPostContentsBox = ({
  data,
  detailModalOpener,
  onCurrentModal,
}: ListPostContentsBoxProps) => {
  return (
    <div>
      {data.updated_at && (
        <ListContents
          onClick={() => {
            detailModalOpener();
            onCurrentModal(data.id);
          }}
        >
          <UserNickName>{data.user_nickname}</UserNickName>
          <PostContent>{data.subject}</PostContent>
          <UserMbti>{data.user_mbti}</UserMbti>
          <UserSignDate>
            {new Date(data.updated_at).toISOString().substring(0, 10)}
          </UserSignDate>
        </ListContents>
      )}
    </div>
  );
};

const ListContents = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr 1fr 1fr;
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
