import styled, { css } from 'styled-components/macro';
// import ESFC_DOG from '../../../../src/assets/images/ESFC_DOG.png';
import ESFC_DOG from '../../../../src/assets/svg/ESFC_DOG.svg';
// import ResultNotice from '../../../../src/assets/images/ResultNotice.png';
import ResultNotice from '../../../../src/assets/svg/ResultNoticePositoin.svg';
// import ResultInfo from '../../../../src/assets/images/ResultInfo.png';
import ResultInfo from '../../../../src/assets/svg/ResultInfoPositoin.svg';
import ESFCPosition from '../../../../src/assets/svg/ESFCPosition.svg';
import MBTIGraph from './Graph/MBTIGraph';

const MBTIResultInfo = () => {
  return (
    <MBTIResultInfoContainer>
      <MBTIDOG src={ESFC_DOG} />
      <MBTIResult>ESFC</MBTIResult>
      <MBTICharacter>천진난만 꾸러기 댕댕이</MBTICharacter>
      <MBTIContent>
        에너지가 넘치는 꾸러기 댕댕이군요! 에너지를 분출시켜주기 위해서 자주
        산책을 시켜주는 것이 좋을 것 같아요! 다른 강아지한테 장난도 많고
        나한테도 장난을 많이 치는 성격인데 확실히 교육과 놀이를 구분시켜 가르칠
        필요가 있습니다! 흥분을 절제하는 방법을 교육 시키는 것 또한
        좋아보입니다!
      </MBTIContent>
      <NoticeImage src={ResultNotice} />
      <GraphInfo src={ResultInfo} />
      <MBTIGraph />
    </MBTIResultInfoContainer>
  );
};
const BasicText = css`
  text-align: center;
  color: #333333;
`;

const MBTIResultInfoContainer = styled.div`
  ${props => props.theme.flex.flexBox('column', 'center', 'center')};
  width: 100%;
  height: 100%;
`;

const MBTIDOG = styled.img`
  width: 560px;
`;

const MBTIResult = styled.span`
  margin-top: 3rem;
  font-size: 50px;
  font-weight: 500;
  ${BasicText}
`;

const MBTICharacter = styled.span`
  margin-top: 1rem;
  font-size: 18px;
  ${BasicText}
`;

const MBTIContent = styled.span`
  margin: 3rem 10rem 0 10rem;
  line-height: 2rem;
  font-size: 20px;
  ${BasicText}
`;

const NoticeImage = styled.img`
  width: 930px;
  margin-top: 5rem;
`;

const GraphInfo = styled.img`
  width: 930px;
  margin-top: 5rem;
`;

export default MBTIResultInfo;
