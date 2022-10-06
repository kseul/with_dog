import Page2Bg from 'assets/svg/2page.svg';
import Page3Bg from 'assets/svg/3page.svg';
import Page4Bg from 'assets/svg/4page.svg';

const PAGES_DATA = [
  {
    id: 1,
    title: '내 반려견과 잘 맞는\nMBTI 친구는 누굴까요?',
    subTitle:
      '채팅을 통해서 비슷한 성향의 친구들과\n교류하며 정보를 공유해보세요.',
    reverse: false,
    backGroundImage: Page2Bg,
  },
  {
    id: 2,
    title: '반려견과의 행복한 순간을\n공유하세요!',
    subTitle: '내 반려견의 행복한 순간을 다른 친구들과\n함께 나눠보세요.',
    reverse: true,
    backGroundImage: Page3Bg,
  },
  {
    id: 3,
    title: '산책 메이트 추천 받고 가시개!',
    subTitle:
      '자동 매칭 시스템을 통하여 비슷한 성격의\n반려견과 산책을 떠나볼까요?',
    reverse: false,
    backGroundImage: Page4Bg,
  },
];

export default PAGES_DATA;
