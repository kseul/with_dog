import styled from 'styled-components';
import { ChatModalProp } from 'types/type';

const ChatModal = ({ onClickToggleModal, currentModal }: ChatModalProp) => {
  return <ChatModalContainer>ChatModal</ChatModalContainer>;
};

const ChatModalContainer = styled.div`
  position: absolute;
  width: 20rem;
  height: 20rem;
  transform: translateY(50%);
  background-color: white;
  box-shadow: 1px 1px 15px 2px rgba(0, 0, 0, 0.1);
  border-radius: 1.2rem;
`;

export default ChatModal;
