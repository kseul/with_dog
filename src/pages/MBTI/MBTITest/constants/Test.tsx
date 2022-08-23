export interface TestData {
  id: number;
  testList: string;
}

export interface AnswerData {
  id: number;
  name: string;
}

export const ENERGY_TEST_DB: TestData[] = [
  {
    id: 1,
    testList: '1. 새로운 장소에 가면 금방 적응하는 편이다.',
  },
  {
    id: 2,
    testList: '2. 흥분을 주체하지 못하는 편이다.',
  },
  {
    id: 3,
    testList: '3. 산책 시 내가 끌려다니는 편이다.',
  },
  {
    id: 4,
    testList: '4. 항상 흥이 돋아 있어서 정신이 없는 경우가 많은 편이다.',
  },
  {
    id: 5,
    testList: '5. 낯선 사람에게도 쓰다듬어 달라고 요구하는 편이다.',
  },
];

export const RELATION_TEST_DB: TestData[] = [
  {
    id: 1,
    testList: '6. 본인 집에 있을 경우에 반려견을 찾기 힘든 편이다.',
  },
  {
    id: 2,
    testList: '7. 새로운 장소에서 다른 강아지들과 잘 어울리는 편이다.',
  },
  {
    id: 3,
    testList: '8. 혼자 있는 시간을 보내는 것을 좋아하는 편이다.',
  },
  {
    id: 4,
    testList: '9. 사람한테 다가가기 보다 멀리서 바라만 보는 편이다.',
  },
  {
    id: 5,
    testList: '10. 다른 강아지에게 먼저 다가가서 냄새를 맡아 보는 편이다.',
  },
];

export const REACTION_TEST_DB: TestData[] = [
  {
    id: 1,
    testList: '11. 작은 소리나 움직임에도 쉽게 놀라는 편이다.',
  },
  {
    id: 2,
    testList: '12. 초인종 소리가 들리면 많이 짖는 편이다.',
  },
  {
    id: 3,
    testList: '13. 항상 주위를 경계하는 모습을 자주 보이는 편이다.',
  },
  {
    id: 4,
    testList: '14. 병원에서 엄살이 심한 편이다.',
  },
  {
    id: 5,
    testList: '15. 엘리베이터 탈 때 부터 반려견이 문앞에서 기다리는 편이다.',
  },
];

export const JUDEGEMENT_TEST_DB: TestData[] = [
  {
    id: 1,
    testList:
      '16. 새로운 장소에 가면 주인 옆에 있기 보다 구석구석 냄새를 맡으며 돌아다니는 편이다.',
  },
  {
    id: 2,
    testList: `17. '기다려'와 같은 명령을 잘 따르는 편이다.`,
  },
  {
    id: 3,
    testList: '18. 산책 시 나와 함께 보폭을 맞추며 나란히 걷는 편이다.',
  },
  {
    id: 4,
    testList: '19. 다양한 것에 흥미를 느끼고 궁금해 하는 편이다.',
  },
  {
    id: 5,
    testList: '20. 나의 행동보다는 다른 곳에 더 관심이 많은 편이다.',
  },
];

export const ANSWER_DB: AnswerData[] = [
  {
    id: 1,
    name: '그렇다',
  },
  {
    id: 2,
    name: '매우 그렇다',
  },
  {
    id: 3,
    name: '아니다',
  },
  {
    id: 4,
    name: '매우 아니다',
  },
];