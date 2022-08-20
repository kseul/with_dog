import styled from 'styled-components';
import ChatList from './components/ChatList';

const Chatting = () => {
  return (
    <ChattingContainer>
      {CHATLIST_DATA.map(({ id, title, description }) => {
        return <ChatList key={id} title={title} description={description} />;
      })}
    </ChattingContainer>
  );
};

const ChattingContainer = styled.div`
  ${props => props.theme.flex.flexBox('column')}
  height: 100vh;
  background-color: #ececed;
`;

export default Chatting;

const CHATLIST_DATA = [
  {
    id: 1,
    title: '탐험가',
    description:
      '소심하지만 세상이 궁금한 댕댕이, 츤데레 댕댕이, 몽상을 즐기는 탐험적 댕댕이들을 위한 채팅방 입니다!',
  },
  {
    id: 2,
    title: '꾸러기',
    description:
      '소심하지만 세상이 궁금한 댕댕이, 츤데레 댕댕이, 몽상을 즐기는 탐험적 댕댕이들을 위한 채팅방 입니다!',
  },
  {
    id: 3,
    title: '전략가',
    description:
      '소심하지만 세상이 궁금한 댕댕이, 츤데레 댕댕이, 몽상을 즐기는 탐험적 댕댕이들을 위한 채팅방 입니다!',
  },
  {
    id: 4,
    title: '활동가',
    description:
      '소심하지만 세상이 궁금한 댕댕이, 츤데레 댕댕이, 몽상을 즐기는 탐험적 댕댕이들을 위한 채팅방 입니다!',
  },
];
