import styled from 'styled-components';

const UserInfoBox = () => {
  return (
    <UserInfoContainer>
      <UserInfoWrapper>
        <UserCategory>이름</UserCategory>
        <CategoryText>김철회</CategoryText>
      </UserInfoWrapper>
      <UserInfoWrapper>
        <UserCategory>닉네임</UserCategory>
        <CategoryText>홱홱홱홱</CategoryText>
      </UserInfoWrapper>
      <UserInfoWrapper>
        <UserCategory>이메일</UserCategory>
        <CategoryText>kc8@naver.com</CategoryText>
      </UserInfoWrapper>
      <UserInfoWrapper>
        <UserCategory>강아지MBTI</UserCategory>
        <CategoryText>INFP</CategoryText>
      </UserInfoWrapper>
      <UserInfoWrapper>
        <UserCategory>가입일</UserCategory>
        <CategoryText>2022.08.20</CategoryText>
      </UserInfoWrapper>
    </UserInfoContainer>
  );
};

const UserInfoContainer = styled.div`
  width: 90%;
`;

const UserInfoWrapper = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', '')}
  width: 100%;
  height: 1.5rem;
  border: 1px solid black;
  margin-bottom: -1px;
`;

const UserCategory = styled.div`
  padding-top: 0.2rem;
  width: 30%;
  height: 100%;
  background-color: ${props => props.theme.colors.lightGray};
  border-right: 1px solid black;
  text-align: center;
`;

const CategoryText = styled.div`
  width: 70%;
  padding-left: 0.5rem;
`;

export default UserInfoBox;
