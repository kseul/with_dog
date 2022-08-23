export interface TestData {
  id: number;
  testList: string;
}

export interface AnswerData {
  id: number;
  name: string;
  score: number;
  checked: boolean;
}

export const TEST_DB: TestData[] = [
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

export const ANSWER_DB: AnswerData[] = [
  {
    id: 1,
    name: '그렇다',
    score: 1,
    checked: false,
  },
  {
    id: 2,
    name: '매우 그렇다',
    score: 2,
    checked: false,
  },
  {
    id: 3,
    name: '아니다',
    score: -1,
    checked: false,
  },
  {
    id: 4,
    name: '매우 아니다',
    score: -2,
    checked: false,
  },
];
