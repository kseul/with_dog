import styled from 'styled-components';
import Message from './Message';

const Messages = () => {
  return (
    <MessagesContainer>
      <Message />
    </MessagesContainer>
  );
};

const MessagesContainer = styled.div`
  flex: 1;
  width: 65%;
  background-color: ${props => props.theme.colors.lineLightGray};
`;

export default Messages;
