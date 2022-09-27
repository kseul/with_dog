import styled, { css } from 'styled-components';
import editPencil from 'assets/svg/pencil.svg';

const UserNamingSection = ({ name, lengthLimit, nickname, openEditModal }) => {
  return (
    <UserNamingContainer>
      <UserName>{name}</UserName>
      <UserNickName lengthLimit={lengthLimit}>
        {nickname}
        <EditNickname
          src={editPencil}
          onClick={openEditModal}
          lengthLimit={lengthLimit}
        />
      </UserNickName>
    </UserNamingContainer>
  );
};

const FontStyle = css`
  font-size: 1.23rem;
  font-weight: 600;
`;

const UserNamingContainer = styled.div`
  margin-bottom: 2rem;
`;

const UserName = styled.div`
  margin-bottom: 1.2rem;
  ${FontStyle}
`;

const UserNickName = styled.div<{
  lengthLimit: boolean;
}>`
  position: relative;
  ${FontStyle}
  font-size: ${props => (props.lengthLimit ? '1.55rem' : '2.6rem')};
`;

const EditNickname = styled.img<{
  lengthLimit: boolean;
}>`
  position: absolute;
  top: ${props => (props.lengthLimit ? '0%' : '30%')};
  right: -10%;
  height: 1.25rem;
  cursor: pointer;
`;

export default UserNamingSection;
