import { ReactComponent as Icon1 } from 'assets/svg/탐험가형.svg';
import { ReactComponent as Icon2 } from 'assets/svg/꾸러기형.svg';
import { ReactComponent as Icon3 } from 'assets/svg/전략가형.svg';
import { ReactComponent as Icon4 } from 'assets/svg/활동가형.svg';

const CHATLIST_DATA = [
  {
    id: 1,
    Image: Icon1,
    title: '탐험가',
    description:
      '소심하지만 세상이 궁금한 댕댕이, 츤데레 댕댕이, 몽상을 즐기는 탐험적 댕댕이들을 위한 채팅방입니다!',
    modalDescription:
      '겁많은 탐험가 댕댕이, 세상이 궁금한 몽상가 댕댕이, 겉바속촉 츤데레 댕댕이, 소심한 구경꾼 댕댕이들이 모인 채팅방 입니다 :) 어서 함께 하시개!',
    type: 'INTC, INFC, ISTC, ISFC',
  },
  {
    id: 2,
    Image: Icon2,
    title: '꾸러기',
    description:
      '천방지축 천진난만한 댕댕이, 자유로운 영혼의 장난꾸러기 같은 댕댕이들을 위한 채팅방입니다!',
    modalDescription:
      '자유로운 영혼 댕댕이, 콧대높은 천방지축 댕댕이, 천진난만 꾸러기 댕댕이, 능글맞은 장난꾸러기 댕댕이들이 모인 채팅방 입니다 :) 어서 함께 하시개!',
    type: 'ENFC, ESTC, ENFC, ENFP',
  },
  {
    id: 3,
    Image: Icon3,
    title: '전략가',
    description:
      '눈치가 빠르고 든든한 모범 댕댕이, 지혜로운 나무늘보 댕댕이, 영리한 전략가 댕댕이들을 위한 채팅방입니다!',
    modalDescription:
      '눈치빠른 모범생 댕댕이, 지혜로운 나무늘보 댕댕이, 든든한 오른팔 댕댕이, 영리한 전략가 댕댕이들이 모인 채팅방 입니다 :) 어서 함께 하시개!',
    type: 'INTC, INFP, ENTP, ENFP',
  },
  {
    id: 4,
    Image: Icon4,
    title: '활동가',
    description:
      '부끄러움은 많지만 호기심 있는 댕댕이, 마당발 댕댕이, 싹싹하고 활동적인 댕댕이들을 위한 채팅방입니다!',
    modalDescription:
      '우직한 보디가드 댕댕이, 부끄럼 많은 마당발 댕댕이, 호기심 많은 쫄보 댕댕이, 싹싹한 골목대장 댕댕이들이 모인 채팅방 입니다 :) 어서 함께 하시개!',
    type: 'ISTP, ISFP, ENTC, ESTP',
  },
];

export default CHATLIST_DATA;
