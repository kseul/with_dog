import styled from 'styled-components';

const UserInfoBox = ({ data }) => {
  return (
    <UserInfoContainer>
      <UserInfoWrapper>
        <UserCategory>이름</UserCategory>
        <CategoryText>{data.user_name}</CategoryText>
      </UserInfoWrapper>
      <UserInfoWrapper>
        <UserCategory>닉네임</UserCategory>
        <CategoryText>{data.user_nickname}</CategoryText>
      </UserInfoWrapper>
      <UserInfoWrapper>
        <UserCategory>이메일</UserCategory>
        <CategoryText>{data.user_email}</CategoryText>
      </UserInfoWrapper>
      <UserInfoWrapper>
        <UserCategory>강아지MBTI</UserCategory>
        <CategoryText>{data.user_mbti}</CategoryText>
      </UserInfoWrapper>
      <UserInfoWrapper>
        <UserCategory>가입일</UserCategory>
        <CategoryText>
          {new Date(data.user_created_at).toISOString().substring(0, 10)}
        </CategoryText>
      </UserInfoWrapper>
    </UserInfoContainer>
  );
};

const UserInfoContainer = styled.div`
  width: 90%;
  background-color: ${props => props.theme.colors.white};
`;

const UserInfoWrapper = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', '')}
  width: 100%;
  height: 1.5rem;
`;

const UserCategory = styled.div`
  margin-bottom: -1px;
  padding-top: 0.2rem;
  width: 30%;
  height: 100%;
  border-right: none;
  border: 0.5px solid black;
  text-align: center;
`;

const CategoryText = styled.div`
  margin-bottom: -1px;
  padding-top: 0.2rem;
  padding-left: 0.5rem;
  width: 70%;
  height: 100%;
  border: 0.5px solid black;
`;

export default UserInfoBox;
