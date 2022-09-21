export interface TestData {
  testId: number;
  testList: string;
  labelName: string;
}

export interface AnswerData {
  id: number;
  name: string;
}

export const ENERGY_TEST_DB: TestData[] = [
  {
    testId: 0,
    testList: '1. 항상 흥이 돋아 있어서 정신이 없는 경우가 많은 편이다.',
    labelName: 'a',
  },
  {
    testId: 1,
    testList: '2. 흥분을 주체하지 못하는 편이다.',
    labelName: 'b',
  },
  {
    testId: 2,
    testList: '3. 산책 시 내가 끌려다니는 편이다.',
    labelName: 'c',
  },
  {
    testId: 3,
    testList: '4. 새로운 장소에 가면 금방 적응하는 편이다.',
    labelName: 'd',
  },
  {
    testId: 4,
    testList: '5. 낯선 사람에게도 쓰다듬어 달라고 요구하는 편이다.',
    labelName: 'e',
  },
];

export const RELATION_TEST_DB: TestData[] = [
  {
    testId: 0,
    testList: '6. 혼자 있는 시간을 보내는 것을 좋아하는 편이다.',
    labelName: 'f',
  },
  {
    testId: 1,
    testList: '7. 새로운 장소에서 다른 강아지들과 잘 어울리는 편이다.',
    labelName: 'g',
  },
  {
    testId: 2,
    testList: '8. 본인 집에 있을 경우에 반려견을 찾기 힘든 편이다.',
    labelName: 'h',
  },
  {
    testId: 3,
    testList: '9. 사람한테 다가가기 보다 멀리서 바라만 보는 편이다.',
    labelName: 'i',
  },
  {
    testId: 4,
    testList: '10. 다른 강아지에게 먼저 다가가서 냄새를 맡아 보는 편이다.',
    labelName: 'j',
  },
];

export const REACTION_TEST_DB: TestData[] = [
  {
    testId: 0,
    testList: '11. 작은 소리나 움직임에도 쉽게 놀라는 편이다.',
    labelName: 'k',
  },
  {
    testId: 1,
    testList: '12. 초인종 소리가 들리면 많이 짖는 편이다.',
    labelName: 'l',
  },
  {
    testId: 2,
    testList: '13. 항상 주위를 경계하는 모습을 자주 보이는 편이다.',
    labelName: 'm',
  },
  {
    testId: 3,
    testList: '14. 병원에서 엄살이 심한 편이다.',
    labelName: 'n',
  },
  {
    testId: 4,
    testList: '15. 엘리베이터 탈 때 부터 반려견이 문앞에서 기다리는 편이다.',
    labelName: 'o',
  },
];

export const JUDEGEMENT_TEST_DB: TestData[] = [
  {
    testId: 1,
    testList: '16. 산책 시 나와 함께 보폭을 맞추며 나란히 걷는 편이다.',
    labelName: 'p',
  },
  {
    testId: 2,
    testList: `17. '기다려'와 같은 명령을 잘 따르는 편이다.`,
    labelName: 'q',
  },
  {
    testId: 3,
    testList:
      '18. 새로운 장소에 가면 주인 옆에 있기 보다 구석구석 냄새를 맡으며 돌아다니는 편이다.',
    labelName: 'r',
  },
  {
    testId: 4,
    testList: '19. 다양한 것에 흥미를 느끼고 궁금해 하는 편이다.',
    labelName: 's',
  },
  {
    testId: 5,
    testList: '20. 나의 행동보다는 다른 곳에 더 관심이 많은 편이다.',
    labelName: 't',
  },
];

export const ANSWER_DB: AnswerData[] = [
  {
    id: 0,
    name: '매우 그렇다',
  },
  {
    id: 1,
    name: '그렇다',
  },
  {
    id: 2,
    name: '아니다',
  },
  {
    id: 3,
    name: '매우 아니다',
  },
];
