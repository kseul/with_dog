import styled from 'styled-components';

const UserEmailSection = ({ email }) => {
  return (
    <UserEmailWrapper>
      <Title>{email}</Title>
    </UserEmailWrapper>
  );
};

const UserEmailWrapper = styled.div`
  margin-top: 3rem;
  color: gray;
`;

const Title = styled.div`
  margin-bottom: 0.3rem;
  font-size: 1.23rem;
  font-weight: 600;
`;

export default UserEmailSection;
