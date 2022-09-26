import { MBTIResultProps, ResultData } from '../type';
import INTCPosition from '../../../../assets/images/INTCPosition.png';
import INTPPosition from '../../../../assets/images/INTPPosition.png';
import INFCPosition from '../../../../assets/images/INFCPosition.png';
import INFPPosition from '../../../../assets/images/INFPPosition.png';
import ISTCPosition from '../../../../assets/images/ISTCPosition.png';
import ISTPPosition from '../../../../assets/images/ISTPPosition.png';
import ISFCPosition from '../../../../assets/images/ISFCPosition.png';
import ISFPPosition from '../../../../assets/images/ISFPPosition.png';
import ENTCPosition from '../../../../assets/images/ENTCPosition.png';
import ENTPPosition from '../../../../assets/images/ENTPPosition.png';
import ENFCPosition from '../../../../assets/images/ENFCPosition.png';
import ENFPPosition from '../../../../assets/images/ENFPPosition.png';
import ESTCPosition from '../../../../assets/images/ESTCPosition.png';
import ESTPPosition from '../../../../assets/images/ESTPPosition.png';
import ESFCPosition from '../../../../assets/images/ESFCPosition.png';
import ESFPPosition from '../../../../assets/images/ESFPPosition.png';
import INTCDog from 'assets/svg/INTC_Character.svg';
import INTPDog from 'assets/svg/INTP_Character.svg';
import INFCDog from 'assets/svg/INFC_Character.svg';
import INFPDog from 'assets/svg/INFP_Character.svg';
import ISTCDog from 'assets/svg/ISTC_Character.svg';
import ISTPDog from 'assets/svg/ISTP_Character.svg';
import ISFCDog from 'assets/svg/ISTP_Character.svg';
import ISFPDog from 'assets/svg/ISFC_Character.svg';
import ENTCDog from 'assets/svg/ENTC_Character.svg';
import ENTPDog from 'assets/svg/ENTP_Character.svg';
import ENFCDog from 'assets/svg/ENFC_Character.svg';
import ENFPDog from 'assets/svg/ENFP_Character.svg';
import ESTCDog from 'assets/svg/ESTC_Character.svg';
import ESTPDog from 'assets/svg/ESTP_Character.svg';
import ESFCDog from 'assets/svg/ESFC_Character.svg';
import ESFPDog from 'assets/svg/ESFP_Character.svg';

export const MBTI_RESULT: ResultData[] = [
  {
    resultId: 0,
    MBTIImage: INTCDog,
    MBTI: 'INTC',
    MBTICharacter: '겁많은 탐험가 댕댕이',
    content:
      '우리 강아지는 눈치를 조금 많이 봅니다..! 세상에 관심이 많은데 살짝쿵 내향적인 성향이어서 그래요! 겁도 많고 조금은 소심하지만 호기심은 못 참죠! 얼른 우리 강아지의 든든한 버팀목이 되어주세요!',
    MBTIPosition: INTCPosition,
  },
  {
    resultId: 1,
    MBTIImage: INTPDog,
    MBTI: 'INTP',
    MBTICharacter: '눈치빠른 모범생 댕댕이',
    content:
      '강아지지만 내향적이고 독립적인 스타일! 하지만 눈치가 빠르고 영리하기 때문에 모범생의 모습을 띄고 있네요. 조용조용 혼자 할 일을 잘 해내면서 주인 말 까지 잘 알아듣는 똑똑이 친구 입니다.',
    MBTIPosition: INTPPosition,
  },
  {
    resultId: 2,
    MBTIImage: INFCDog,
    MBTI: 'INFC',
    MBTICharacter: '세상이 궁금한 몽상가 댕댕이',
    content:
      '집에 혼자있는게 편해요! 집돌이 스타일!! 내향적인 성격의 강아지 입니다. 하지만 궁금한게 너무 많기 때문에 새로운 곳에 가면 여기 저기 돌아다니는 모습을 자주 보입니다. 호기심이 많아 자주 돌아다니지만 모르는 사람이나 반려견이 조금 부담스러울 수 있어요!',
    MBTIPosition: INFCPosition,
  },
  {
    resultId: 3,
    MBTIImage: INFPDog,
    MBTI: 'INFP',
    MBTICharacter: '지혜로운 나무늘보 댕댕이',
    content:
      '본인만의 스타일이 확고해요! 그렇지만 영리한 강아지이기 때문에 믿음이 생긴다면 자신의 모든 것을 내어주는 믿음직한 친구입니다! 강아지의 영원한 친구가 되어주세요!',
    MBTIPosition: INFPPosition,
  },
  {
    resultId: 4,
    MBTIImage: ISTCDog,
    MBTI: 'ISTC',
    MBTICharacter: '겉바속촉 츤데레 댕댕이',
    content:
      '겉으로 보기에는 다가가기 어렵지만 알고보면 친근한 강아지 입니다. 호기심이 많아서 친근한듯 하지만 곁을 쉽게 내어 주지 않습니다. 시간을 두고 천천히 다가가면 마음을 열어주는 츤데레 친구 입니다.',
    MBTIPosition: ISTCPosition,
  },
  {
    resultId: 5,
    MBTIImage: ISTPDog,
    MBTI: 'ISTP',
    MBTICharacter: '우직한 보디가드 댕댕이',
    content:
      '내 말을 잘듣는 우직한 느낌의 경호원같은 강아지 입니다. 모르는 사람과 다른 강아지들과 금방 친해지지만 자기 영역이라고 생각되는 것에 침범되면 스트레스를 받을 수 있습니다! 다른 사람들과 만날 때에는 최대한 경계심을 풀어주세요!',
    MBTIPosition: ISTPPosition,
  },
  {
    resultId: 6,
    MBTIImage: ISFCDog,
    MBTI: 'ISFC',
    MBTICharacter: '소심한 구경꾼 댕댕이',
    content:
      '우리 강아지가 너무 얌전한가요? 조용하게 주변을 음미하는 친구입니다! 내향적이어서 소심해 보이지만, 주변 환경에 대한 호기심 가득! 친구와 사람에 대한 관심 또한 가득입니다!',
    MBTIPosition: ISFCPosition,
  },
  {
    resultId: 7,
    MBTIImage: ISFPDog,
    MBTI: 'ISFP',
    MBTICharacter: '부끄럼 많은 마당발 댕댕이',
    content:
      '낯가리지만 금방 친해지는 애교쟁이 입니다. 조용히 다가오면서 곁을 쉽게 내어주면서 마음을 사로잡습니다. 처음에만 한 번 조심히 다가가면 쉽게 친해질 수 있고 말도 잘 듣는 친구입니다.',
    MBTIPosition: ISFPPosition,
  },
  {
    resultId: 8,
    MBTIImage: ENTCDog,
    MBTI: 'ENTC',
    MBTICharacter: '호기심 많은 쫄보 댕댕이',
    content:
      '겁이 조금 많아 보이는 강아지 입니다. 계속해서 새로운 것을 궁금해하고 다가가고 싶지만 조그만 소리에도 깜짝 놀래는 경향이 있기 때문에 장난으로도 놀래키는 행위는 지양해주세요. 호기심이 많고 활동적이기 때문에 교육과 놀이를 구분해서 교육이 필요할 것 같아요!',
    MBTIPosition: ENTCPosition,
  },
  {
    resultId: 9,
    MBTIImage: ENTPDog,
    MBTI: 'ENTP',
    MBTICharacter: '든든한 오른팔 댕댕이',
    content:
      '독립심이 강해, 혼자 있는 것을 좋아하기도 합니다! 또한 자존심과 자기주장이 강할 수 있으며 도전하는 것을 마다하지 않아요! 주인의 든든한 오른팔이 되어줄 친구입니다!',
    MBTIPosition: ENTPPosition,
  },
  {
    resultId: 10,
    MBTIImage: ENFCDog,
    MBTI: 'ENFC',
    MBTICharacter: '자유로운 영혼 댕댕이',
    content:
      '호기심이 많은 친구라서 언제든지 뛰어나갈 준비가 되어 있네요! 반려견과 함께 외출을 나가면 자유로운 영혼처럼 흘러가네요. 언제 뛰어갈지 모르니 잘 관리해야 겠어요.',
    MBTIPosition: ENFCPosition,
  },
  {
    resultId: 11,
    MBTIImage: ENFPDog,
    MBTI: 'ENFP',
    MBTICharacter: '영리한 전략가 댕댕이',
    content:
      '전략가 처럼 ‘간식’의 ‘간’이라는 소리만 들어도 벌써부터 와서 간식을 기다리고 있는데 간식 먹자마자 자기 영역으로 돌아가는 강아지 입니다. 자기 할것만 충족하고 쏙 돌아가서 섭섭할 수 있지만 그렇다고 억지로 잡고 있으면 스트레스 받을 수 있느니 스스로 오면 반겨주는 것을 추천드려요!',
    MBTIPosition: ENFPPosition,
  },
  {
    resultId: 12,
    MBTIImage: ESTCDog,
    MBTI: 'ESTC',
    MBTICharacter: '콧대높은 천방지축 댕댕이',
    content:
      '지나가는 모든 것이 궁금한 장난꾸러기 친구랍니다! 그래서 먼저 다가가는 아주 사교성 좋은 친구처럼 보이지만 함부로 만지지는 말아주세요! 겉보기와는 다르게 조금은 예민한 친구입니다!',
    MBTIPosition: ESTCPosition,
  },
  {
    resultId: 13,
    MBTIImage: ESTPDog,
    MBTI: 'ESTP',
    MBTICharacter: '싹싹한 골목대장 댕댕이',
    content:
      '사교적이고 영리해서 골목대장 느낌이 나네요! 다가가기 쉽고 친근하게 느껴지기 때문에 사랑을 한 몸에 다 받겠네요. 또한 영리하기 때문에 사랑에 안 빠질 수 없는 강아지입니다.',
    MBTIPosition: ESTPPosition,
  },
  {
    resultId: 14,
    MBTIImage: ESFCDog,
    MBTI: 'ESFC',
    MBTICharacter: '천진난만 꾸러기 댕댕이',
    content:
      '에너지가 넘치는 꾸러기 댕댕이군요! 에너지를 분출시켜주기 위해서 자주 산책을 시켜주는 것이 좋을 것 같아요! 다른 강아지한테 장난도 많고 나한테도 장난을 많이 치는 성격인데 확실히 교육과 놀이를 구분시켜 가르칠 필요가 있습니다! 흥분을 절제하는 방법을 교육 시키는 것 또한 좋아보입니다!',
    MBTIPosition: ESFCPosition,
  },
  {
    resultId: 15,
    MBTIImage: ESFPDog,
    MBTI: 'ESFP',
    MBTICharacter: '능글맞은 장꾸 댕댕이',
    content:
      '의지하고 내 곁을 맡길 수 있는 믿음직한 친구입니다! 다른 강아지와도 사이 좋게 지내는 인싸 강아지이지만 그 어떤 강아지보다도 주인을 가장 잘 따릅니다! 의지할 수 있는 좋은 친구를 옆에 두셔서 좋으시겠어요~',
    MBTIPosition: ESFPPosition,
  },
];

export const MBTI_RESULT_DATA: MBTIResultProps[] = [
  {
    id: 0,
    mbti: 'I',
    score: 4,
    layout: 'lefttop',
  },
  { id: 1, mbti: 'S', score: -5, layout: 'leftbottom' },
  { id: 2, mbti: 'T', score: 10, layout: 'righttop' },
  { id: 3, mbti: 'P', score: -6, layout: 'rightbottom' },
];

export const room1 = ['INTC', 'INFC', 'ISTC', 'ISFC'];
export const room2 = ['ENFC', 'ESTC', 'ESFC', 'ESFP'];
export const room3 = ['INTP', 'INFP', 'ENTP', 'ENFP'];
export const room4 = ['ISTP', 'ISFP', 'ENTC', 'ESTP'];
