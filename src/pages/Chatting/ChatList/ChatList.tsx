import styled from 'styled-components';
import ChatListBox from './components/ChatListBox';
import { ReactComponent as Icon1 } from 'assets/svg/탐험가형.svg';
import { ReactComponent as Icon2 } from 'assets/svg/꾸러기형.svg';
import { ReactComponent as Icon3 } from 'assets/svg/전략가형.svg';
import { ReactComponent as Icon4 } from 'assets/svg/활동가형.svg';

const ChatList = () => {
  return (
    <ChattingContainer>
      {CHATLIST_DATA.map(({ id, Image, title, description }) => {
        return (
          <ChatListBox
            key={id}
            Image={Image}
            title={title}
            description={description}
          />
        );
      })}
    </ChattingContainer>
  );
};

const ChattingContainer = styled.div`
  ${props => props.theme.flex.flexBox('column')}
  height: 100vh;
  background-color: #ececed;
`;

export default ChatList;

const CHATLIST_DATA = [
  {
    id: 1,
    Image: Icon1,
    title: '탐험가',
    description:
      '소심하지만 세상이 궁금한 댕댕이, 츤데레 댕댕이, 몽상을 즐기는 탐험적 댕댕이들을 위한 채팅방입니다!',
  },
  {
    id: 2,
    Image: Icon2,
    title: '꾸러기',
    description:
      '천방지축 천진난만한 댕댕이, 자유로운 영혼의 장난꾸러기 같은 댕댕이들을 위한 채팅방입니다!',
  },
  {
    id: 3,
    Image: Icon3,
    title: '전략가',
    description:
      '눈치가 빠르고 든든한 모범 댕댕이, 지혜로운 나무늘보 댕댕이, 영리한 전략가 댕댕이들을 위한 채팅방입니다!',
  },
  {
    id: 4,
    Image: Icon4,
    title: '활동가',
    description:
      '부끄러움은 많지만 호기심 있는 댕댕이, 마당발 댕댕이, 싹싹하고 활동적인 댕댕이들을 위한 채팅방입니다!',
  },
];
