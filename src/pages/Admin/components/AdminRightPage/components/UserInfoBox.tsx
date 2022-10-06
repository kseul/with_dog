import styled from 'styled-components';
import { ModalDataTypes } from 'pages/Admin/type';

interface UserInfoBoxProps {
  data: ModalDataTypes;
}

const UserInfoBox = ({ data }: UserInfoBoxProps) => {
  return (
    <UserInfoContainer>
      {data && (
        <>
          <UserInfoProfileBox>
            <UserThumbnailImg src={data.user_thumbnail} />
            <UserNickname>{data.user_nickname}</UserNickname>
          </UserInfoProfileBox>
          <UserContentsBox>
            <UserMbti>{data.user_mbti}</UserMbti>
            <UserEmail>{data.user_email}</UserEmail>
            <UserAddress>{data.user_address}</UserAddress>
            <UserSignUpDate>
              {data.user_created_at.substring(0, 10)}
            </UserSignUpDate>
          </UserContentsBox>
        </>
      )}
    </UserInfoContainer>
  );
};

const UserInfoContainer = styled.div`
  ${props => props.theme.flex.flexBox('', '', '')}
  width: 90%;
  height: 30%;
  background-color: #e4e4e1;
  background-image: radial-gradient(
      at top center,
      rgba(255, 255, 255, 0.03) 0%,
      rgba(0, 0, 0, 0.03) 100%
    ),
    linear-gradient(
      to top,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(143, 152, 157, 0.6) 100%
    );
  background-blend-mode: normal, multiply;
  border-radius: 1rem;
  color: ${props => props.theme.colors.white};
`;

const UserInfoProfileBox = styled.div`
  ${props => props.theme.flex.flexBox('column', 'center', 'center')}
  width: 30%;
  height: 100%;
`;

const UserThumbnailImg = styled.img`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;

const UserNickname = styled.p`
  margin-top: 1rem;
  font-size: 0.8rem;
`;

const UserContentsBox = styled.div`
  ${props => props.theme.flex.flexBox('column', '', 'space-evenly')}
  width: 70%;
  height: 100%;
`;

const UserMbti = styled.p`
  font-weight: bold;
`;

const UserEmail = styled.p`
  font-size: 0.9rem;
`;

const UserAddress = styled.p`
  font-size: 0.9rem;
`;

const UserSignUpDate = styled.p`
  font-size: 0.9rem;
`;

export default UserInfoBox;
