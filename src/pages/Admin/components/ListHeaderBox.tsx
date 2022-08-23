import styled from 'styled-components';

const ListHeaderContents = () => {
  return (
    <UserListHeader>
      <UserName>사용자</UserName>
      <UserEmail>이메일</UserEmail>
      <UserMbti>MBTI</UserMbti>
      <UserSignDate>가입일</UserSignDate>
    </UserListHeader>
  );
};

const UserListHeader = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr 1fr 1fr;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  height: 30px;
  background-color: ${props => props.theme.colors.lightGray};
`;

const UserName = styled.span`
  width: 100px;
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

export default ListHeaderContents;