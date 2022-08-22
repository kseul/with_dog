import styled from 'styled-components';
import ArrowRight from 'assets/svg/arrow-right.svg';
import { ChatListProp, idProp } from 'types/type';
import { useState } from 'react';
import ChatModal from 'pages/Chatting/ChatModal/ChatModal';

const ChatListRight = ({ id }: ChatListProp) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [currentModal, setCurrentModal] = useState<number | undefined>();

  const onClickToggleModal = () => {
    setIsShowModal(!isShowModal);
  };

  const onCurrentModal = (id: idProp) => {
    setCurrentModal(id);
  };

  return (
    <>
      <ChatListRightContainer
        onClick={() => {
          onClickToggleModal();
          onCurrentModal(id);
        }}
      >
        <GoChatIntro> 살펴보개 </GoChatIntro>
        <GoChatEntryIcon src={ArrowRight} />
      </ChatListRightContainer>
      {isShowModal && (
        <ChatModal
          onClickToggleModal={onClickToggleModal}
          currentModal={currentModal}
        />
      )}
    </>
  );
};

const ChatListRightContainer = styled.div`
  position: relative;
  ${props => props.theme.flex.flexBox('row', 'center', 'center')}
  flex-basis: 13%;
  min-width: 8.8rem;
  height: 7rem;
  background-color: ${props => props.theme.colors.purple};
  border-radius: 0 1.2rem 1.2rem 0;
  transition: background-color 200ms ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.mint};
  }
`;

const GoChatIntro = styled.div`
  margin-right: 1.4rem;
  color: ${props => props.theme.colors.white};
  font-weight: 500;
  font-size: 1.1rem;
`;

const GoChatEntryIcon = styled.img`
  position: absolute;
  top: 2.75rem;
  right: 1.7rem;
  width: 1.25rem;
`;

export default ChatListRight;
