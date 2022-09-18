import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import testImg from 'assets/images/dog3.png';
import ArrowLeft from 'assets/svg/siren.svg';

const Message = ({ message: { user, text, time }, nickname }) => {
  let isSentByCurrentUser = false;
  if (user === nickname) {
    isSentByCurrentUser = true;
  }

  const storeData = useSelector((state: any) => state);
  const userImage = storeData.user.userData.thumbnail_url;

  // user === '함께하개 관리자' ?

  return isSentByCurrentUser ? (
    <MessageContainer currentUser={isSentByCurrentUser}>
      <MessageBox>
        <TextContainer>
          <TextData>
            <Time>{time}</Time>
          </TextData>
          <TextBox currentUser={isSentByCurrentUser}>
            <Text>{text}</Text>
          </TextBox>
        </TextContainer>
      </MessageBox>
      <ProfileImg src={userImage} />
    </MessageContainer>
  ) : (
    <MessageContainer currentUser={isSentByCurrentUser}>
      <ProfileImg src={testImg} />
      <MessageBox>
        <UserBox>
          <Nickname>{user}</Nickname>
          <Mbti>INFP</Mbti>
        </UserBox>
        <TextContainer>
          <TextBox currentUser={isSentByCurrentUser}>
            <Text>{text}</Text>
          </TextBox>
          <TextData>
            <ReportIcon src={ArrowLeft} />
            <Time>{time}</Time>
          </TextData>
        </TextContainer>
      </MessageBox>
    </MessageContainer>
  );
};

const MessageContainer = styled.div<{ currentUser: boolean }>`
  ${props => props.theme.flex.flexBox()}
  justify-content: ${({ currentUser }) => (currentUser ? 'end' : 'start')};
  padding: 1.3rem 1rem 0rem 1rem;
`;

const ProfileImg = styled.img`
  margin: 0 0.8rem;
  width: 4rem;
  height: 4rem;
  border: 0.2rem solid white;
  border-radius: 50%;
  object-fit: cover;
`;

const MessageBox = styled.div`
  ${props => props.theme.flex.flexBox('column')}
  align-items: flex-start;
`;

const UserBox = styled.div`
  ${props => props.theme.flex.flexBox()}
`;

const Nickname = styled.div`
  margin-right: 0.3rem;
  font-size: 1.1rem;
  font-weight: 500;
`;

const Mbti = styled.div`
  padding: 0.25rem 0.5rem 0.2rem 0.5rem;
  border-radius: 0.8rem;
  font-size: 0.7rem;
  font-weight: 500;
  color: white;
  background-color: ${props => props.theme.colors.mint};
`;

const TextContainer = styled.div`
  ${props => props.theme.flex.flexBox()}
  justify-content: start;
  align-items: flex-end;
  margin-top: 0.3rem;
`;

const TextBox = styled.div<{ currentUser: boolean }>`
  max-width: 80%;
  padding: 0.6rem 0.9rem;
  display: inline-block;
  border-radius: 0.6rem;
  background: white;
  background-color: ${({ currentUser }) => (currentUser ? 'gray' : 'white')};
  color: ${({ currentUser }) => (currentUser ? 'white' : 'black')};
`;

const Text = styled.div`
  font-size: 1.1rem;
  line-height: 1.4rem;
`;

const TextData = styled.div`
  ${props => props.theme.flex.flexBox('column')}
  align-items: start;
  padding: 0 0.6rem;
`;

const ReportIcon = styled.img`
  width: 1.1rem;
  margin-bottom: 0.6rem;

  &:hover {
    cursor: pointer;
  }
`;

const Time = styled.div`
  font-size: 0.8rem;
`;

export default Message;
