import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Message from './Message';

const Messages = ({ messages, nickname }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollTo({
      top: messagesEndRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages]);

  return (
    <MessagesContainer ref={messagesEndRef}>
      {messages.map((message, i: number) => (
        <div key={i}>
          <Message message={message} nickname={nickname} />
        </div>
      ))}
    </MessagesContainer>
  );
};

const MessagesContainer = styled.div`
  flex: 1;
  width: 65%;
  padding-bottom: 1rem;
  overflow: auto;
  background-color: ${props => props.theme.colors.lineLightGray};
`;

export default Messages;
