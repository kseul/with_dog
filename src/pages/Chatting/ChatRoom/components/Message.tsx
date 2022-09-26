import styled from 'styled-components';
import store from 'redux/store';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { MessagesProps } from 'types/type';
import Siren from 'assets/svg/siren.svg';
import chatReportActions from 'redux/actions/chatReport';

const Message = ({
  message: {
    user_nickname,
    user_id,
    user_mbti,
    user_image,
    text,
    message_id,
    time,
  },
  nickname,
  setIsShowModal,
}: MessagesProps | any) => {
  let isSentByCurrentUser = false;
  if (user_nickname === nickname) {
    isSentByCurrentUser = true;
  }

  const storeData = useSelector((state: RootState) => state);
  const userImage = storeData.user.userData.thumbnail_url;

  const ReportChatData = (id, messageId, text) => {
    store.dispatch(chatReportActions.reportedUserId(id));
    store.dispatch(chatReportActions.reportedMessageId(messageId));
    store.dispatch(chatReportActions.reportedMessage(text));
  };

  if (user_nickname === '함께하개 관리자') {
    return (
      <AdminTextBox>
        <Text>{text}</Text>
      </AdminTextBox>
    );
  }

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
      <ProfileImg src={user_image} />
      <MessageBox>
        <UserBox>
          <Nickname>{user_nickname}</Nickname>
          <Mbti>{user_mbti}</Mbti>
        </UserBox>
        <TextContainer>
          <TextBox currentUser={isSentByCurrentUser}>
            <Text>{text}</Text>
          </TextBox>
          <TextData>
            <ReportIcon
              src={Siren}
              onClick={() => {
                setIsShowModal(true);
                ReportChatData(user_id, message_id, text);
              }}
            />
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
  padding: 1.3rem 1rem 0 1rem;
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

const AdminTextBox = styled.div`
  margin: 0.8rem auto 0.8rem auto;
  padding: 0.3rem 0;
  width: 80%;
  border-radius: 5rem;
  color: #efefef;
  background-color: gray;
  font-size: 0.4rem;
  text-align: center;
`;

export default Message;
