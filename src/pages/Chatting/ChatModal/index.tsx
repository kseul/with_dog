import styled from 'styled-components';
import { ChatModalProp } from 'types/type';
import ArrowRight from 'assets/svg/arrow-right.svg';
import { Link } from 'react-router-dom';
import store from 'redux/store';
import chatRoomActions from 'redux/actions/chat';
import { useEffect } from 'react';

const ChatModal = ({
  onClickToggleModal,
  id,
  Image,
  modalDescription,
  type,
  title,
}: ChatModalProp) => {
  const currentRoom = (title, id) => {
    store.dispatch(chatRoomActions.setRoom(`${title} 방`));
    store.dispatch(chatRoomActions.setRoomId(id));
  };

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <>
      <ChatModalContainer>
        <Image style={{ width: '12rem', marginRight: '1rem' }} />
        <Title>{title}형</Title>
        <Description>{modalDescription}</Description>
        <Line />
        <Type>{type}</Type>
        <Link to={`/chat/${id}`}>
          <EntryBtn
            onClick={() => {
              currentRoom(title, id);
            }}
          >
            <Text>채팅방 입장하기</Text>
            <GoChatEntryIcon src={ArrowRight} />
          </EntryBtn>
        </Link>
      </ChatModalContainer>
      <BackGround onClick={onClickToggleModal} />
    </>
  );
};

const ChatModalContainer = styled.div`
  ${props => props.theme.flex.flexBox('column')}
  position: fixed;
  top: 50%;
  width: 30rem;
  height: 40rem;
  transform: translateY(-49%);
  background-color: white;
  box-shadow: 1px 1px 15px 2px rgba(0, 0, 0, 0.1);
  border-radius: 1.2rem;
  z-index: 2;
`;

const Title = styled.div`
  margin: 2rem 0 2rem 0;
  font-size: 2.5rem;
  font-weight: 700;
`;

const Description = styled.div`
  padding: 0 3.6rem 0 3.5rem;
  font-size: 1.1rem;
  font-weight: 500;
  color: ${props => props.theme.colors.gray};
  text-align: center;
  line-height: 1.7rem;
`;

const Line = styled.div`
  background-color: ${props => props.theme.colors.lineLightGray};
  width: 16rem;
  height: 2px;
  margin-top: 3rem;
`;

const Type = styled.div`
  margin: 1.4rem 0 1.4rem 0;
  font-size: 1.6rem;
  font-weight: 700;
  color: ${props => props.theme.colors.purple};
`;

const EntryBtn = styled.button`
  position: relative;
  ${props => props.theme.flex.flexBox('row', 'center', 'center')}
  padding: 1.2rem 3.8rem 1.2rem 3rem;
  font-size: 1.5rem;
  color: white;
  background-color: ${props => props.theme.colors.mint};
  border: none;
  border-radius: 0.8rem;
  transition: background-color 200ms ease-in-out;
  &:hover {
    background-color: ${props => props.theme.colors.selectMint};
  }
`;

const Text = styled.span`
  font-size: 1.5rem;
`;

const GoChatEntryIcon = styled.img`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  width: 1.65rem;
`;

const BackGround = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export default ChatModal;
